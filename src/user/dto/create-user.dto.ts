import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Uzeyr OZCAN',
  })
  name: string;

  @ApiProperty({
    example: 'muzeyr@gmail.com',
  })
  @IsEmail()
  email: string;
}
