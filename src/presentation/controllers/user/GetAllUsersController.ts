import { ok } from '@main/utils/apiResponse';
import type { GetAllUsers } from '@application/useCases/user/GetAllUsers';
import type { HttpResponse } from '@presentation/protocols/http';
import type { IController } from '@presentation/protocols/IController';

export class GetAllUsersController implements IController {
  private readonly _useCase: GetAllUsers;

  public constructor(useCase: GetAllUsers) {
    this._useCase = useCase;
  }

  public async handle(): Promise<HttpResponse> {
    const payload = await this._useCase.execute();

    return ok({ payload });
  }
}
