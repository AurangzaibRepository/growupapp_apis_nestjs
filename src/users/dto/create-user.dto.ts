import { IsNotEmpty, IsEmail, IsEnum, Max } from 'class-validator';
import { USERROLES } from 'src/enums/users.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @Max(30, {
    message: 'First name cannot be greater than 30 characters',
  })
  first_name: string;

  @IsNotEmpty()
  @Max(30, {
    message: 'Last name cannot be greater than 30 characters',
  })
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Max(50, {
    message: 'Contact number cannot be greater than 50 characters',
  })
  contact_number: string;

  @IsNotEmpty()
  password: string;

  picture: string;

  @IsNotEmpty()
  @IsEnum(USERROLES, {
    message: 'Invalid role',
  })
  role: USERROLES;
}
