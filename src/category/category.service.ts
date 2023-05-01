import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryCreateDto } from './dto/category-create.dto';
import { isDefined } from 'class-validator';
import { CategoryNotFoundException } from 'src/common/exceptions/category.notfound.exception';

@Injectable()
export class CategoryService {
   

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    ){
        
    }

    async getAll(){
        return await this.categoryRepo.find();
    }
    async create(category: CategoryCreateDto){
        const result = new Category();
        result.name = category.name;
        return await this.categoryRepo.save(result);
    }

    async update(categoryId: string,category: CategoryCreateDto) {
        const findCat = await this.categoryRepo.findOne({
            where:{
                id: categoryId,
            }
        })
        if (isDefined(findCat)){
            findCat.name = category.name;
            return await this.categoryRepo.save(findCat);
        } 
        throw new CategoryNotFoundException(categoryId);

     
    }

    deleteById(){

    }

     async getByCategoryId(categoryId: string) {
        const result = await this.categoryRepo.findOne({
            where:{
                id: categoryId,
            }
        })
        if(isDefined(result)){
            return result
        }
        throw new CategoryNotFoundException(categoryId);
    }
}
