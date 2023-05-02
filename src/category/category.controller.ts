import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { NestJSReponse as NestJSResponse } from 'src/common/utils/nestjs.response';
import { CategoryCreateUpdateDto } from './dto/category-create-update.dto';
 

@Controller('category')
@ApiTags('Category')
export class CategoryController {
    
    constructor(private readonly catService: CategoryService){

    }

    @Get()
    async getAll(){
        return NestJSResponse.toResponseArray(await this.catService.getAll());
    }

    @Post()
    async create(@Body() category: CategoryCreateUpdateDto){
        return NestJSResponse.toResponse(await this.catService.create(category))

    }

    @Patch('/:categoryId')
    async update(@Param('categoryId') categoryId: string, @Body() category: CategoryCreateUpdateDto) {

        return NestJSResponse.toResponse(await this.catService.update(categoryId,category))

    }

    @Delete('/:categoryId')
    async delete(@Param('categoryId') categoryId: string) {

        return NestJSResponse.toResponse(await this.catService.delete(categoryId))

    }

}
