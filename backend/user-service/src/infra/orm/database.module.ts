import { Module } from '@nestjs/common';
import { UserRepository } from 'src/applicaction/repositories/user-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUserService } from './prisma/repositories/user.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserService,
    },
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
