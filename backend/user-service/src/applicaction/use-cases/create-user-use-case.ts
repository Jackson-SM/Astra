import { Injectable } from '@nestjs/common';
import { User } from 'src/applicaction/entities/User';
import { UserRepository } from 'src/applicaction/repositories/user-repository';

type CreateUserRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type CreateUserResponse = {
  user: User;
};

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, firstName, lastName, password } = request;

    const user = new User({ email, firstName, lastName, password });

    const userCreated = await this.userRepository.save(user);

    return {
      user: userCreated,
    };
  }
}
