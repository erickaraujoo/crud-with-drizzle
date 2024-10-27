export class Employee {
  public constructor(
    public createdAt: Date,
    public id: number,
    public name: string,
    public password: string,
    public userName: string,

    public refreshToken?: string | null,
    public refreshTokenExpiresAt?: Date | null,
    public updatedAt?: Date | null,
    public finishedAt?: Date | null
  ) {}
}
