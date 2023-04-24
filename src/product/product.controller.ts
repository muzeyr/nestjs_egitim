import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Active Product',
  })
  async activeProduct() {
    return await this.productService.all();
  }

  @Get('byUserId/:userId')
  @ApiOperation({
    summary: "Active User's Product",
  })
  async geyByUserUd(@Param('userId') userId: string) {
    return await this.productService.byUserId(userId);
  }

  @Post()
  async create(@Body() productCreateDto: ProductCreateDto) {
    return await this.productService.create(productCreateDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() productCreateDto: ProductCreateDto,
  ) {
    return await this.productService.update(productCreateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
    return await this.productService.delete(id);
  }
}
