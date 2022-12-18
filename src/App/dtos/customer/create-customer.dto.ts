import { treatStringToDate } from '@Helpers/Date';
import { treatPassword } from '@Helpers/Password';
import { isCpf } from '@Validators/Document';
import {
  IsAlpha,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class CreateCustomerDto {
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

  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(256)
  password: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getPassword(): string {
    return treatPassword(this.password);
  }

  getBirthDate(): Date {
    return treatStringToDate(this.birthDate);
  }
}
