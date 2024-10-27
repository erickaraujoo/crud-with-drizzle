import { CustomError, errorLogger } from '@main/utils/helpers';
import { CustomErrorType } from '@main/config/constants';
import { TokenExpiredError } from 'jsonwebtoken';
import { badRequest, internalServerError, notFound, unauthorized } from '@main/utils/apiResponse';
import type { HttpResponse } from '@presentation/protocols/http';
import type { NextFunction, Request, Response } from 'express';

export const errorHandlerMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const httpResponse = handle(error, req, res, next);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

const handle = (error: Error, req: Request, res: Response, next: NextFunction): HttpResponse => {
  errorLogger(error);

  if (error instanceof CustomError)
    switch (error.type) {
      case CustomErrorType.FieldNotFound:
        return notFound({ field: error.message });
      case CustomErrorType.InternalServerError:
        return internalServerError();
      default:
        return badRequest({ message: error.message });
    }

  if (error instanceof TokenExpiredError) return unauthorized();
  // if (error instanceof ValidationError) return yupError({ error, response });

  if (
    error instanceof Error &&
    (error.message.includes('ECONNREFUSED') || error.message.includes('Connection timeout'))
  )
    return badRequest({ message: 'Active Directory: Falha durante conexão' });

  return internalServerError();
};
