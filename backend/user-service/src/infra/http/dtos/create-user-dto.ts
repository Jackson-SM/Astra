import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(5, 30)
  password: string;

  @IsNotEmpty()
  @Length(2, 30)
  firstName: string;

  @IsNotEmpty()
  @Length(2, 30)
  lastName: string;
}
