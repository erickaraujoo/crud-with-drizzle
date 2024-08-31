import '../config/module-alias';

import { EmployeeController } from '@interface/controller/EmployeeController';
import { EmployeeRepository } from './repository/EmployeeRepository';
import { GetAllEmployee } from '@application/use-case/getAllEmployee';
import { resolve } from 'path';
import { serverConfig } from '@config/constants';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({ exposedHeaders: 'X-Total-Count' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static(resolve(__dirname, '..', '..', 'uploads')));

const employeeRepository = new EmployeeRepository();
const getAllEmployee = new GetAllEmployee(employeeRepository);
const employeeController = new EmployeeController(getAllEmployee);

app.get('/employee', (req, res) => {
  (async () => {
    await employeeController.getAll(req, res);
  })().catch((error: unknown) => {
    console.error(error);
  });
});

app.listen(serverConfig.port, () => {
  console.info(`Server running in port ${serverConfig.port}`);
});
