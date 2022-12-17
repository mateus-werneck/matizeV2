import { treatPassword } from '@Helpers/Password';
import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class UpdateUserDto {
  @IsPhoneNumber('BR')
  @MinLength(11)
  @MaxLength(20)
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(256)
  password?: string;

  getPassword(): string {
    return treatPassword(this.password)
  }
}
