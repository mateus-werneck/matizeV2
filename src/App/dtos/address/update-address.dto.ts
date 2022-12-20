import { IsNotIn, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @IsNumber()
  @IsNotIn([0])
  number?: number;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
