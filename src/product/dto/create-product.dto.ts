import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProductCreateDto {
  @ApiProperty({
    example: 'Product Name1',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'User Id',
  })
  @IsString()
  userId: string;
}
