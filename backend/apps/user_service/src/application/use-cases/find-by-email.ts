import { User } from '../../domain/entities/user';
import { UserRepository } from '../../domain/repositories/user-repository';

interface FindByEmailRequest {
  email: string;
}
interface FindByEmailResponse {
  user: User;
}

export class FindByEmail {
  constructor(private userRepository: UserRepository) {}

  async execute(request: FindByEmailRequest): Promise<FindByEmailResponse> {
    const { email } = request;

    const user = await this.userRepository.findByEmail(email);

    return {
      user,
    };
  }
}
