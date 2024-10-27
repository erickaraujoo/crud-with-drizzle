import { Router } from 'express';
import { errorHandlerMiddleware } from '@main/middleware/errorHandlerMiddleware';
import { errorLogger } from '@main/utils/helpers';
import { readdirSync } from 'fs';
import path from 'path';
import type { Express } from 'express';

export const loadRoutes = (app: Express): void => {
  void (async () => {
    try {
      const router = Router();

      app.use(router);

      const routesFolderPath = path.resolve(__dirname, '..', '..', 'presentation', 'routes');
      const routesFiles = readdirSync(routesFolderPath);

      const importPromises = routesFiles.map(async (file) => {
        if (!file.includes('.spec.') && file.endsWith('.ts')) {
          const filePath = path.resolve(routesFolderPath, file);
          const routeModule = await import(filePath);

          return routeModule.default(router);
        }

        return null;
      });

      await Promise.all(importPromises);

      app.use(errorHandlerMiddleware);
    } catch (error) {
      errorLogger(error);
    }
  })();
};
