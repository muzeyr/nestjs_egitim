import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { IsAdult } from './user.validation';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Uzeyr OZCAN',
  })
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'muzeyr@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1990-12-18',
  })
  @IsDateString()
  @IsAdult({ message: 'Kayıt için 18 yaşından büyük olmalı' })
  birthday: Date;
}
