import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByEmailUseCase } from 'src/applicaction/use-cases/find-user-by-email-use-case';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class FindUserByEmailController {
  constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

  @Get(':email')
  async handle(@Param('email') email: string) {
    const { user } = await this.findUserByEmailUseCase.execute({ email });

    return UserViewModel.toHttp(user);
  }
}
