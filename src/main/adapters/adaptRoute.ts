import type { IController } from '@presentation/protocols/IController';
import type { NextFunction, Request, Response } from 'express';

export const adaptRoute =
  (controller: IController) =>
  (req: Request, res: Response, next: NextFunction): void => {
    void (async () => {
      const httpResponse = await controller.handle(req, res);

      res.status(httpResponse.statusCode).json(httpResponse.body);
    })().catch(next);
  };
