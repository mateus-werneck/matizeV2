import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  parent?: string;
}
