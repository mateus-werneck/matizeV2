import { treatPassword } from '@Helpers/Password';
import { isCpf } from '@Validators/Document';
import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class CreateUserDto {
  @isCpf()
  @IsNotEmpty()
  document: string;

  @MinLength(3)
  @MaxLength(256)
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  firstName: string;

  @MinLength(3)
  @MaxLength(256)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @MaxLength(256)
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('BR')
  @MinLength(11)
  @MaxLength(20)
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(256)
  password: string;

  getPassword(): string {
    return treatPassword(this.password)
  }
}
