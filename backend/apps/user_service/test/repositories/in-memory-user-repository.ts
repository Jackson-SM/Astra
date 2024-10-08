import { User } from '../../src/domain/entities/user';
import { UserRepository } from '../../src/domain/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    const userExists = this.users.find((u) => u.email === user.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
