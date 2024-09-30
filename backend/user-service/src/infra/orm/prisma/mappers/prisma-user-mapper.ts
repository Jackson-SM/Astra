import { User as UserPrisma } from '@prisma/client';
import { User } from 'src/applicaction/entities/User';

export class PrismaUserMapper {
  public static toPrisma(user: User): UserPrisma {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
  public static toDomain(user: UserPrisma): User {
    return new User(
      {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      user.id,
    );
  }
}
