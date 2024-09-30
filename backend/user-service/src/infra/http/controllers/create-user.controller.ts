import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/applicaction/use-cases/create-user-use-case';
import { CreateUserDTO } from 'src/infra/http/dtos/create-user-dto';

@Controller('users')
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() body: CreateUserDTO) {
    const { email, firstName, lastName, password } = body;

    await this.createUserUseCase.execute({
      email,
      firstName,
      lastName,
      password,
    });
  }
}
