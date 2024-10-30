import { adaptRoute } from '@main/adapters/adaptRoute';
import { makeGetAllUsersController } from '@main/factories/user/makeGetAllUserController';
import { makeInsertUserController } from '@main/factories/user/makeInsertUserController';
import type { Router } from 'express';

export default (router: Router): void => {
  router.get('/user', adaptRoute(makeGetAllUsersController()));
  router.post('/user', adaptRoute(makeInsertUserController()));
};
