import { StatusCode } from '@config/constants';
import type { GetAllEmployee } from '@application/use-case/getAllEmployee';
import type { Request, Response } from 'express';

export class EmployeeController {
  private readonly _useCase: GetAllEmployee;

  public constructor(useCase: GetAllEmployee) {
    this._useCase = useCase;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const output = await this._useCase.execute();

      res.status(StatusCode.OK).json({ output });
    } catch (error) {
      console.error(error);
    }
  }
}
