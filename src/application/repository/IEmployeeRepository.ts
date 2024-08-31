import type { Employee } from '@domain/entity/employee';

export interface IEmployeeRepository {
  getAllEmployee: () => Promise<Employee[]>;
}
