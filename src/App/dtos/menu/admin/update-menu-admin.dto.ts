import {
  IsNotEmpty,
  IsString
} from 'class-validator';

export class UpdateMenuAdminDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  route?: string;

  @IsString()
  @IsNotEmpty()
  icon?: string;
}
