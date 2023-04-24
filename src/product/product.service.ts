import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async create(productCreateDto: ProductCreateDto) {
    const product = new Product();
    product.name = productCreateDto.name;
    product.user = new User({ id: productCreateDto.userId });
    const result = await this.productRepository.save(product);
    return result;
  }
  async update(productCreateDto: ProductCreateDto) {
    //dbsave
    const product = new Product();
    product.name = productCreateDto.name;
    const result = await this.productRepository.save(product);
    return result;
  }
  async delete(productId: string) {
    const result = await this.productRepository.softDelete(productId);
    return result;
  }
  async all() {
    return await this.productRepository.find({
      where: {},
      relations: ['user'],
    });
  }
  async byUserId(userId: string) {
    return await this.productRepository.find({
      where: {
        userId,
      },
    });
  }
}
