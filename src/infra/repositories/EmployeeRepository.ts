import { EmployeeMapper } from '@application/mapper/employee/EmployeeMapper';
import { db } from '@infra/database/drizzle';
import { employee } from '@infra/database/model/Employee';
import type { EmployeeDTO } from '@application/dto/employee/EmployeeDTO';
import type { IEmployeeRepository } from '@domain/repository/IEmployeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  public async getAll(): Promise<EmployeeDTO[]> {
    const employees = await db.select().from(employee);

    return employees.map((item) => EmployeeMapper.toDTO(item));
  }
}
