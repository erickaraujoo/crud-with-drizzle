import { object } from 'yup';
import { stringRequired } from '@main/utils/yupUtils';
import type { InferType } from 'yup';

export const insertUserSchema = object().shape({
  email: stringRequired('Email'),
  name: stringRequired('Nome')
});

export type InsertUserBody = InferType<typeof insertUserSchema>;
