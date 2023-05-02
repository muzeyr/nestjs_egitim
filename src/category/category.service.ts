import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm'; 
import { CategoryCreateUpdateDto } from './dto/category-create-update.dto';
import { isDefined } from 'class-validator';
import { CategoryNotFoundException } from 'src/common/exceptions/category.notfound.exception';

@Injectable()
export class CategoryService {
 
   
    constructor(
        @InjectRepository(Category)
        private readonly catRepo: Repository<Category>
    ){

    }
    async getAll() {
        const result = await this.catRepo.find(); 
        return result;
    }

    async create(category: CategoryCreateUpdateDto) {
        const newCat = new Category();
        newCat.name = category.name;
        return await this.catRepo.save(newCat);
    }

    async update(id: string, category: CategoryCreateUpdateDto) {
        const findCat = await this.catRepo.findOne({
            where:{
                id,
            }
        });
        if (isDefined(findCat)){
            findCat.name = category.name;
            return await this.catRepo.save(findCat);

        }else{
            throw new CategoryNotFoundException(id);
        }

         
    }
    async delete(categoryId: string): Promise<any> {
        return await this.catRepo.softDelete(categoryId);
    }

}
