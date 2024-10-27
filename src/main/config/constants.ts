import 'dotenv/config';

export const serverConfig = { port: process.env['API_PORT'] ?? 3333 };

export const dbConfig = {
  host: process.env['DB_HOST'] ?? '',
  name: process.env['DB_NAME'] ?? '',
  password: process.env['DB_PASSWORD'] ?? '',
  port: process.env['DB_PORT'] ?? 5432,
  userName: process.env['DB_USERNAME'] ?? ''
};

export enum StatusCode {
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  NOT_AUTHORIZED = 401,
  NOT_FOUND = 404,
  OK = 200,
  TIMEOUT = 408
}

export enum CustomErrorType {
  FieldNotFound = 'FieldNotFound',
  InternalServerError = 'InternalServerError',
  UserEmailAlreadyExists = 'UserEmailAlreadyExists'
}

export const CustomErrorMessage: Omit<Record<CustomErrorType, string>, 'FieldNotFound'> = {
  [CustomErrorType.InternalServerError]: 'Erro interno no servidor',
  [CustomErrorType.UserEmailAlreadyExists]: 'Ja existe um usuário com este e-mail'
};
