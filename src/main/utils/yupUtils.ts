/* eslint-disable no-ternary */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { date, mixed, number, string } from 'yup';
import {
  emptyString,
  errorDateSchema,
  errorNumberSchema,
  errorRequiredSchema,
  maxNumericRange,
  maxSerialRange,
  numberSizeLimitExcedded
} from '@main/config/constants';
import type { DateSchema, Maybe, MixedSchema, NumberSchema, StringSchema } from 'yup';

export const stringRequired = (value: string): StringSchema<string> =>
  string().trim().required(errorRequiredSchema(value));

export const mixedRequired = (value: string): MixedSchema =>
  mixed().required(errorRequiredSchema(value));

export const stringNotRequired = (): StringSchema<string | null | undefined> =>
  string().trim().notRequired().nullable();

export const numberRequired = (value: string): NumberSchema<number> =>
  number().typeError(errorNumberSchema(value)).required(errorRequiredSchema(value));

export const numberNotRequired = (value: string): NumberSchema<number | null | undefined> =>
  number().typeError(errorNumberSchema(value)).notRequired().nullable();

export const serialRequired = (value: string): NumberSchema<number> =>
  number()
    .typeError(errorNumberSchema(value))
    .required(errorRequiredSchema(value))
    .max(maxSerialRange, numberSizeLimitExcedded(value, maxSerialRange));

export const serialNotRequired = (value: string): NumberSchema<Maybe<number | undefined>> =>
  number()
    .typeError(errorNumberSchema(value))
    .notRequired()
    .nullable()
    .max(maxSerialRange, numberSizeLimitExcedded(value, maxSerialRange));

export const numericRequired = (value: string): NumberSchema =>
  number()
    .typeError(errorNumberSchema(value))
    .required(errorRequiredSchema(value))
    .max(maxNumericRange, numberSizeLimitExcedded(value, maxNumericRange));

export const numericNotRequired = (value: string): NumberSchema<Maybe<number | null | undefined>> =>
  number()
    .typeError(errorNumberSchema(value))
    .notRequired()
    .nullable()
    .max(maxNumericRange, numberSizeLimitExcedded(value, maxNumericRange));

export const dateRequired = (value: string): DateSchema<Maybe<Date | undefined>> =>
  date().typeError(errorDateSchema(value)).required(errorRequiredSchema(value));

export const dateNotRequired = (value: string): DateSchema<Maybe<Date | null | undefined>> =>
  date().typeError(errorDateSchema(value)).notRequired().nullable();

export const mailTest = (value: unknown): boolean => {
  if (typeof value === 'string') {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/iu;

    if (emailRegex.test(value)) return true;
  }

  return false;
};

export const phoneTest = (value: unknown): boolean => {
  if (typeof value === 'string') {
    const phoneRegex = /^\(?(?<first>\d{2})\)?(?<second>\d{4,5})?(?<third>\d{4})$/u;

    if (phoneRegex.test(value)) return true;
  }

  return false;
};

export const validateCPF = (cpf: unknown): boolean => {
  if (cpf === null || typeof cpf === 'undefined') return true;

  if (typeof cpf === 'string') {
    if (cpf.length === emptyString) return true;

    const formattedCPF = cpf.replace(/\D/gu, '');

    if (formattedCPF.length !== 11 || /^(?<temp1>\d)\1+$/u.test(formattedCPF)) return false;

    const digits = Array.from(formattedCPF, Number);

    const calculateDigit = (slice: number[], factor: number): number => {
      let sum = 0;

      for (let index = 0; index < slice.length; index += 1) sum += slice[index] * (factor - index);

      const remainder = (sum * 10) % 11;

      return remainder === 10 ? 0 : remainder;
    };

    const digit1 = calculateDigit(digits.slice(0, 9), 10);
    const digit2 = calculateDigit(digits.slice(0, 10), 11);

    return digit1 === digits[9] && digit2 === digits[10];
  }

  return false;
};
