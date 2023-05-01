import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMenuAdminDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  route: string;

  @IsString()
  @IsNotEmpty()
  icon: string;

  @IsInt()
  @IsNotEmpty()
  orderBy: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  parent?: string;
}
