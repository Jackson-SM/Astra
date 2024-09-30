import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/applicaction/use-cases/create-user-use-case';
import { FindUserByEmailUseCase } from 'src/applicaction/use-cases/find-user-by-email-use-case';
import { DatabaseModule } from 'src/infra/orm/database.module';
import { CreateUserController } from './create-user.controller';
import { FindUserByEmailController } from './find-user-by-email.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController, FindUserByEmailController],
  providers: [CreateUserUseCase, FindUserByEmailUseCase],
})
export class UserModule {}
