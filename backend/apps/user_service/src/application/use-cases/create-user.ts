import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repositories/user-repository';

type CreateUserRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type CreateUserResponse = { user: User };

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, firstName, lastName, password } = request;

    const userEntity = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const user = await this.userRepository.save(userEntity);

    return {
      user,
    };
  }
}
