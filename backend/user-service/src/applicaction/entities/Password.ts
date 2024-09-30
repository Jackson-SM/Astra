export class Password {
  private readonly password: string;

  get value(): string {
    return this.password;
  }

  private validateContentLength(password: string): boolean {
    return password.length >= 5 && password.length <= 60;
  }

  constructor(password: string) {
    const validPassword = this.validateContentLength(password);

    if (!validPassword) {
      throw new Error('Invalid password length');
    }

    this.password = password;
  }
}
