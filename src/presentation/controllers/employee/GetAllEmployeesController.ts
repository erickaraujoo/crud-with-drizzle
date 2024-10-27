import { ok } from '@main/utils/apiResponse';
import type { GetAllEmployees } from '@application/useCases/GetAllEmployees';
import type { HttpResponse } from '@presentation/protocols/http';
import type { IController } from '@presentation/protocols/IController';

export class GetAllEmployeesController implements IController {
  private readonly _useCase: GetAllEmployees;

  public constructor(useCase: GetAllEmployees) {
    this._useCase = useCase;
  }

  public async handle(): Promise<HttpResponse> {
    const payload = await this._useCase.execute();

    return ok({ payload });
  }
}
