import { IsCEP } from '@Validators/Document';
import {
  IsNotEmpty,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength
} from 'class-validator';

export class CreateAddressDto {
  @IsCEP()
  @IsNotEmpty()
  document: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNumber()
  @IsNotIn([0])
  number: number;

  @IsString()
  @IsNotEmpty()
  district: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
