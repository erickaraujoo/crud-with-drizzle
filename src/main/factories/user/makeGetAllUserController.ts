import { GetAllUsers } from '@application/useCases/user/GetAllUsers';
import { GetAllUsersController } from '@presentation/controllers/user/GetAllUsersController';
import { UserRepository } from '@infra/repositories/UserRepository';
import type { IController } from '@presentation/protocols/IController';

export const makeGetAllUsersController = (): IController => {
  const userRepository = new UserRepository();
  const getAllUsers = new GetAllUsers(userRepository);

  return new GetAllUsersController(getAllUsers);
};
