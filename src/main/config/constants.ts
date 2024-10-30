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

export const maxSerialRange = 2 ** 31 - 1;
export const maxNumericRange = 99999999.99;
export const emptyString = 0;
export const emptyArray = 0;

export const errorDateSchema = (value: string): string => `O campo ${value} deve ser uma data`;
export const errorNumberSchema = (value: string): string => `O campo ${value} deve ser um número`;
export const errorArraySchema = (value: string): string => `O campo ${value} deve ser um array`;
export const errorObjectSchema = (value: string): string => `O campo ${value} deve ser um objeto`;
export const errorRequiredSchema = (value: string): string => `O campo ${value} é obrigatório`;

export const errorMoreThenZeroSchema = (value: string): string =>
  `O campo ${value} deve ser maior que zero`;

export const numberSizeLimitExcedded = (value: string, limit: number | string): string =>
  `O campo ${value} deve ser um valor menor ou igual a ${limit}`;

export const defaultErrorMessages = {
  userWithoutPermission: 'Usuário não possui permissão para realizar esta ação',
  yupError: 'Falha durante validação'
};
