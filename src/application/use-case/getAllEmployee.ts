import type { Employee } from '@domain/entity/employee';
import type { IEmployeeRepository } from '@application/repository/IEmployeeRepository';

export class GetAllEmployee {
  private readonly _repository: IEmployeeRepository;

  public constructor(repository: IEmployeeRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<Employee[]> {
    return await this._repository.getAllEmployee();
  }
}
