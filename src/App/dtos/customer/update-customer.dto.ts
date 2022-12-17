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
}
