import { treatStringToDate } from '@Helpers/Date';
import { treatPassword } from '@Helpers/Password';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class UpdateCustomerDto {
  @IsPhoneNumber('BR')
  @MinLength(11)
  @MaxLength(20)
  @IsOptional()
  phoneNumber?: string;

  @IsDateString()
  @IsOptional()
  birthDate?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(256)
  password?: string;

  getPhoneNumber(): string | null {
    if (!this.phoneNumber) {
      return null;
    }
    return this.phoneNumber;
  }

  getBirthDate(): Date | null {
    if (this.birthDate) {
      return treatStringToDate(this.birthDate);
    }
    return null;
  }

  getPassword(): string | null {
    return treatPassword(this.password);
  }
}
