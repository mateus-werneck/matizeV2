import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  internalName: string;

  @IsString()
  @IsOptional()
  @MaxLength(256)
  description?: string;

  @IsString()
  @MaxLength(25)
  typeName: string;

  @IsString()
  @MaxLength(25)
  sizeName: string;

  @IsInt()
  @Min(100)
  @Max(100000)
  price: number;

  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  quantity?: number;
}
