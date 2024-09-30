import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/applicaction/entities/User';
import { UserRepository } from 'src/applicaction/repositories/user-repository';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserService implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: User): Promise<User> {
    const { email } = user;

    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const userCreated = await this.prisma.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
    });

    const userDomain = PrismaUserMapper.toDomain(userCreated);

    return userDomain;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return PrismaUserMapper.toDomain(user);
  }
}
