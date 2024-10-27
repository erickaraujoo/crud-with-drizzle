import { StatusCode } from '@main/config/constants';
import type { HttpResponse } from '@presentation/protocols/http';

export const ok = ({ payload = {} }: { payload?: unknown }): HttpResponse => ({
  body: { errors: [], message: 'request sucessfull', payload },
  statusCode: StatusCode.OK
});

export const badRequest = ({ message = 'bad request' }: { message?: string }): HttpResponse => ({
  body: { errors: [], message, payload: {} },
  statusCode: StatusCode.BAD_REQUEST
});

export const notFound = ({ field }: { field: string }): HttpResponse => ({
  body: { errors: [], field, message: `${field} não encontrado(a)`, payload: {} },
  statusCode: StatusCode.NOT_FOUND
});

export const internalServerError = (): HttpResponse => ({
  body: { errors: [], message: 'internal server error', payload: {} },
  statusCode: StatusCode.INTERNAL_SERVER_ERROR
});

export const unauthorized = (): HttpResponse => ({
  body: { errors: [], message: 'unauthorized', payload: {} },
  statusCode: StatusCode.NOT_AUTHORIZED
});
