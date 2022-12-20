import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateFileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  mimeType: string;
}
