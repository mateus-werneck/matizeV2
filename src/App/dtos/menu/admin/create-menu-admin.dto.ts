import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMenuAdminDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  route: string;

  @IsString()
  icon: string;

  @IsInt()
  @IsNotEmpty()
  orderBy: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  parentId?: string;
}
