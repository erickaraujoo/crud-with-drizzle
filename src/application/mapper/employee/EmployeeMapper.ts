import type { Employee } from '@domain/entity/employee';
import type { EmployeeDTO } from '@application/dto/employee/EmployeeDTO';

export const EmployeeMapper = {
  toDTO(employee: Employee): EmployeeDTO {
    const {
      createdAt,
      id,
      name,
      userName,
      finishedAt,
      refreshToken,
      refreshTokenExpiresAt,
      updatedAt
    } = employee;

    return {
      createdAt,
      finishedAt,
      id,
      name,
      refreshToken,
      refreshTokenExpiresAt,
      updatedAt,
      userName
    };
  }
};
