import 'dotenv/config';

const dbPort = 5432;

export const serverConfig = {
  port: process.env['API_PORT'] ?? ''
};

export const dbConfig = {
  host: process.env['DB_HOST'] ?? '',
  name: process.env['DB_NAME'] ?? '',
  password: process.env['DB_PASSWORD'] ?? '',
  port: process.env['DB_PORT'] ?? dbPort,
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
