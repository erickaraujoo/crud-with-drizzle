import type { EmployeeDTO } from '@application/dto/employee/EmployeeDTO';
import type { IEmployeeRepository } from '@domain/repository/IEmployeeRepository';

export class GetAllEmployees {
  private readonly _repository: IEmployeeRepository;

  public constructor(repository: IEmployeeRepository) {
    this._repository = repository;
  }

  public async execute(): Promise<EmployeeDTO[]> {
    return await this._repository.getAll();
  }
}
