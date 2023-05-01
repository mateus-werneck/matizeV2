import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMenuAdminDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  route?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  icon?: string;

  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  orderBy?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  parent?: string;
}
