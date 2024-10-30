import type { IUserRepository } from '@domain/repository/IUserRepository';
import type { InsertUserBody } from 'validation/schemas/user/insertUserSchema';

export class InsertUser {
  private readonly _repository: IUserRepository;

  public constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  public async execute(data: InsertUserBody): Promise<void> {
    const createdBy = 'system';

    await this._repository.insert({ createdBy, email: data.email, name: data.name });
  }
}
