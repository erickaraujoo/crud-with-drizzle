import type { EmployeeDTO } from '@application/dto/employee/EmployeeDTO';

export interface IEmployeeRepository {
  getAll: () => Promise<EmployeeDTO[]>;
}
