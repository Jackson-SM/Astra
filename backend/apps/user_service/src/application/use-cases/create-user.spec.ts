import { makeUser } from '@user/test/factories/user-factory';
import { InMemoryUserRepository } from '@user/test/repositories/in-memory-user-repository';
import { UserRepository } from '../../domain/repositories/user-repository';
import { CreateUser } from './create-user';

describe('CreateUser', () => {
  let createUser: CreateUser;
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    createUser = new CreateUser(userRepository);
  });

  it('should create a user', async () => {
    const { user } = await createUser.execute(makeUser());

    const userFind = await userRepository.findByEmail(user.email);

    expect(userFind).toEqual(user);
    expect(userFind.email).toEqual(user.email);
  });

  it('should not create a user if it already exists', async () => {
    const user = makeUser();

    await createUser.execute(user);

    await expect(createUser.execute(user)).rejects.toThrow(
      'User already exists',
    );
  });
});
