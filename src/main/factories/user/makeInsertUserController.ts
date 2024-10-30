import { InsertUser } from '@application/useCases/user/InsertUser';
import { InsertUserController } from '@presentation/controllers/user/InsertUserController';
import { UserRepository } from '@infra/repositories/UserRepository';
import { insertUserSchema } from 'validation/schemas/user/insertUserSchema';
import type { IController } from '@presentation/protocols/IController';
import type { InsertUserBody } from 'validation/schemas/user/insertUserSchema';

export const makeInsertUserController = (): IController => {
  const userRepository = new UserRepository();
  const insertUser = new InsertUser(userRepository);

  const validator = async (data: unknown): Promise<InsertUserBody> =>
    await insertUserSchema.validate(data, { abortEarly: false });

  return new InsertUserController(insertUser, validator);
};
