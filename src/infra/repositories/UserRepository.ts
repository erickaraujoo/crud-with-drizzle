import { db } from '@infra/database/drizzle';
import { user } from '@infra/database/model/User';
import type { IUserRepository } from '@domain/repository/IUserRepository';
import type { InsertUserDTO } from '@application/dto/user/InsertUserDTO';
import type { User } from '@domain/entity/User';

export class UserRepository implements IUserRepository {
  public async getAll(): Promise<User[]> {
    const users = await db.select().from(user);

    return users;
  }

  public async insert(data: InsertUserDTO): Promise<void> {
    await db.insert(user).values({ createdBy: 'system', email: data.email, name: data.name });
  }
}
