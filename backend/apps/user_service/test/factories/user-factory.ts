import { User, UserProps } from '@user/src/domain/entities/user';

type Override = Partial<UserProps>;

export function makeUser(override?: Override) {
  return new User({
    email: 'test@test.com',
    firstName: 'Test',
    lastName: 'User',
    password: 'password',
    ...override,
  });
}
