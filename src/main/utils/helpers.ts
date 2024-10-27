import { CustomErrorMessage, CustomErrorType } from '@main/config/constants';
import fs from 'fs';
import path from 'path';

export class CustomError extends Error {
  public readonly type: CustomErrorType;

  public constructor(type: CustomErrorType, field?: string) {
    if (type === CustomErrorType.FieldNotFound) super(field ?? 'Campo');
    else super(CustomErrorMessage[type]);

    this.type = type;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const dateToErrorLogger = (): string => {
  const date = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/u, '+')
    .split(/ /u);

  return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`;
};

export const errorLogger = (error: unknown): void => {
  if (!(error instanceof Error)) return;

  const date = dateToErrorLogger();
  const pathError = path.resolve(__dirname, '..', '..', '..', 'logs');

  if (!fs.existsSync(pathError)) fs.mkdirSync(pathError, { recursive: true });

  const pathErrorLog = path.resolve(pathError, 'error.log');

  if (typeof error.stack === 'undefined') {
    const stringError = `Date: ${date}\n${error.name} - ${error.message}\n------------------------------------------------\n`;

    fs.appendFile(pathErrorLog, stringError, (fsError) => {
      if (fsError !== null) throw fsError;
    });
  } else {
    const stringError = `Date: ${date}\n${error.stack}\n------------------------------------------------\n`;

    fs.appendFile(pathErrorLog, stringError, (fsError) => {
      if (fsError !== null) throw fsError;
    });
  }
};
