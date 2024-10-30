export class User {
  public constructor(
    public createdAt: Date,
    public createdBy: string,
    public email: string,
    public id: number,
    public name: string,

    public finishedAt?: Date | null,
    public finishedBy?: string | null,
    public updatedAt?: Date | null,
    public updatedBy?: string | null
  ) {}
}
