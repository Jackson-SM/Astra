import { User } from '../entities/User';
import { UserRepository } from '../repositories/user-repository';

interface FindUserByEmailRequest {
  email: string;
}
interface FindUserByEmailResponse {
  user: User;
}

export class FindUserByEmailUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: FindUserByEmailRequest,
  ): Promise<FindUserByEmailResponse | null> {
    const { email } = request;

    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      return null;
    }

    return {
      user,
    };
  }
}
