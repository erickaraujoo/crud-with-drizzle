import { adaptRoute } from '@main/adapters/adaptRoute';
import { makeGetAllEmployeesController } from '@main/factories/employee/makeGetAllEmployeesController';
import type { Router } from 'express';

export default (router: Router): void => {
  router.get('/employee', adaptRoute(makeGetAllEmployeesController()));
};
