import { User } from './user';

describe('User', () => {
  it('should create a user', () => {
    const user = new User({
      email: 'test@test.com',
      firstName: 'Test',
      lastName: 'User',
      password: 'password',
    });

    expect(user).toBeDefined();
  });
});
