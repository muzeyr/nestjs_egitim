import { Injectable } from '@nestjs/common';
import { ProductCreateDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';
import { isDefined } from 'class-validator';
import { ProductNotFoundException } from 'src/common/exceptions/product.notfound.exception';

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
    product.categoryId = productCreateDto.categoryId;
    console.log(product);
    const result = await this.productRepository.save(product);
    return result;
  }
  async update(productId: string, productCreateDto: ProductCreateDto) {
    //dbsave
    const findProduct = await this.productRepository.findOne({
      where:{
        id: productId,
      }
    })
    if (isDefined(findProduct)){
      const product = new Product();
      product.name = productCreateDto.name;
      const result = await this.productRepository.save(product);
      return result;

    }else{
      throw new ProductNotFoundException(productId);
    }

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
  async byId(productId: string) {
    const result =  await this.productRepository.findOne({
      where: {
        id: productId,
      },
      relations: ['user','category']
    });
    if(isDefined(result)){
      return result;
    }
    throw new ProductNotFoundException(productId);
  }

  async byCatId(categoryId: string){
    const result = await this.productRepository.find({
      where:{
        categoryId
      }
    })
    return result;
  }
}
