import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  internalName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  description?: string;

  @IsString()
  @MaxLength(25)
  @IsOptional()
  typeName?: string;

  @IsString()
  @MaxLength(25)
  @IsOptional()
  sizeName?: string;

  @IsNumber()
  @Min(100)
  @Max(100000)
  @IsOptional()
  price?: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  quantity?: number;
}
