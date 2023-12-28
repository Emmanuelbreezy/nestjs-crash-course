import { IsEmail, IsString } from 'class-validator';
export class UpdateDataDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
