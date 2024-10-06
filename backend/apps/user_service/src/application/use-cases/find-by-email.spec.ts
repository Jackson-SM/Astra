import { UserRepository } from '@user/src/domain/repositories/user-repository';
import { makeUser } from '@user/test/factories/user-factory';
import { InMemoryUserRepository } from '@user/test/repositories/in-memory-user-repository';
import { FindByEmail } from './find-by-email';

describe('FindByEmail', () => {
  let findByEmail: FindByEmail;
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    findByEmail = new FindByEmail(userRepository);
  });

  it("should find an user bu it's email", async () => {
    const user = makeUser();

    await userRepository.save(user);

    const { user: userFind } = await findByEmail.execute({ email: user.email });

    expect(userFind).toEqual(user);
    expect(userFind.email).toEqual(user.email);
  });

  it('should not find an user if it does not exist', async () => {
    const user = makeUser();

    await expect(findByEmail.execute({ email: user.email })).rejects.toThrow(
      'User not found',
    );
  });
});
