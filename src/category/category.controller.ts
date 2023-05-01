import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NestJSReponse as NestJSResponse } from 'src/common/utils/nestjs.response';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/category-create.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
    
    constructor(private readonly catService: CategoryService){

    }
    @Get()
    async getAll(){
        const result = await this.catService.getAll();
        return NestJSResponse.toResponseArray(result)
    }

    @Get('/:categoryId')
    async getByCategoryId(@Param('categoryId') categoryId :string) {  
        const result = await this.catService.getByCategoryId(categoryId);

        return NestJSResponse.toResponse(result)
    }

    @Post()
    async create(@Body() createDto: CategoryCreateDto){
        const result = await this.catService.create(createDto);
        return NestJSResponse.toResponse(result);

    }


    @Patch('/:categoryId')
    async update(@Param('categoryId') categoryId : string,
                    @Body() createDto: CategoryCreateDto) {
        const result = await this.catService.update(categoryId,createDto);
        return NestJSResponse.toResponse(result);

    }
    @Delete()
    delete(){
        return NestJSResponse.toResponse({});
    }
 
}
