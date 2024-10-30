import type { InsertUserDTO } from '@application/dto/user/InsertUserDTO';
import type { User } from '@domain/entity/User';

export interface IUserRepository {
  getAll: () => Promise<User[]>;
  insert: (data: InsertUserDTO) => Promise<void>;
}
