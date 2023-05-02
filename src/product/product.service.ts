import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';

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
    product.category = new Category({id:productCreateDto.categoryId});
    product.categoryId = productCreateDto.categoryId;

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
  async byProductId(productId: string) {
    const result = await this.productRepository.find({
      where:
      {
        id: productId
      },
      relations:['category','user']
    })
    return result;
    
  }
  async byCategoryId(catId: string) {
    const result = await this.productRepository.find({
      where:
      {
        categoryId: catId
      },
      relations: ['user'],
      order:{
        createdAt: 'DESC',
      }
    })
    return result;
    
  }
}
