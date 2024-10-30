export class UserAccessType {
  public constructor(
    public accessType: string,
    public createdAt: Date,
    public createdBy: string,
    public expiresIn: number,
    public id: number,
    public refreshToken: string,
    public scope: string,
    public tokenType: string,
    public userId: number,

    public updatedAt?: Date | null,
    public updatedBy?: string | null,
    public finishedAt?: Date | null,
    public finishedBy?: string | null
  ) {}
}
