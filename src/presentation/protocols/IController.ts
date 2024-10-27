import type { HttpResponse } from './http';
import type { Request, Response } from 'express';

export interface IController {
  handle: (req: Request, res: Response) => Promise<HttpResponse>;
}
