export class UserApp {
  public constructor(
    public clientId: string,
    public clientSecret: string,
    public createdAt: Date,
    public createdBy: string,
    public id: number,
    public name: string,
    public userId: number,

    public updatedAt?: Date | null,
    public updatedBy?: string | null,
    public finishedAt?: Date | null,
    public finishedBy?: string | null
  ) {}
}
