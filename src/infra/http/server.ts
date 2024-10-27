import '../../main/config/moduleAlias';

import { loadRoutes } from '@main/config/loadRoutes';
import { resolve } from 'path';
import { serverConfig } from '@main/config/constants';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({ exposedHeaders: 'X-Total-Count' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static(resolve(__dirname, '..', '..', 'uploads')));

loadRoutes(app);

app.listen(serverConfig.port, () => {
  console.info(`Server running in port ${serverConfig.port}`);
});
