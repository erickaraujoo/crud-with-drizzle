import { Employee } from '@domain/entity/employee';
import { db } from '@infra/db/drizzle';
import { employee } from '@infra/db/model/employee';
import type { IEmployeeRepository } from '@application/repository/IEmployeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public async getAllEmployee(): Promise<Employee[]> {
    const result = await db.select().from(employee);

    return result.map((item) => new Employee(item.id, item.name, item.userName));
  }
}
