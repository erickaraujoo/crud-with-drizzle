import { EmployeeRepository } from '@infra/repositories/EmployeeRepository';
import { GetAllEmployees } from '@application/useCases/GetAllEmployees';
import { GetAllEmployeesController } from '@presentation/controllers/employee/GetAllEmployeesController';

export const makeGetAllEmployeesController = (): GetAllEmployeesController => {
  const employeeRepository = new EmployeeRepository();
  const getAllEmployees = new GetAllEmployees(employeeRepository);

  return new GetAllEmployeesController(getAllEmployees);
};
