import type { IUserRepository } from '@domain/repository/IUserRepository';
import type { User } from '@domain/entity/User';

export class GetAllUsers {
  private readonly _repository: IUserRepository;

  public constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<User[]> {
    return await this._repository.getAll();
  }
}
