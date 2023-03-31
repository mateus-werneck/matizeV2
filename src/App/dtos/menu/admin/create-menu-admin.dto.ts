import {
  IsNotEmpty,
  IsString
} from 'class-validator';

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
}
