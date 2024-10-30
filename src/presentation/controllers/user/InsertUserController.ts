import { ok } from '@main/utils/apiResponse';
import type { HttpResponse } from '@presentation/protocols/http';
import type { IController } from '@presentation/protocols/IController';
import type { InsertUser } from '@application/useCases/user/InsertUSer';
import type { InsertUserBody } from 'validation/schemas/user/insertUserSchema';
import type { Request } from 'express';

export class InsertUserController implements IController {
  private readonly _useCase: InsertUser;
  private readonly _validator: (data: unknown) => Promise<InsertUserBody>;

  public constructor(useCase: InsertUser, validator: (data: unknown) => Promise<InsertUserBody>) {
    this._useCase = useCase;
    this._validator = validator;
  }

  public async handle(req: Request): Promise<HttpResponse> {
    const body = await this._validator(req.body);

    await this._useCase.execute(body);

    return ok({});
  }
}
