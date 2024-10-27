import type { Employee } from '@domain/entity/employee';

export type EmployeeDTO = Omit<Employee, 'password'>;
