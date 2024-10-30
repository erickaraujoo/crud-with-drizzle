import type { User } from '@domain/entity/User';

export type InsertUserDTO = Pick<User, 'createdBy' | 'email' | 'name'>;
