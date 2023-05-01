import { ApiProperty } from "@nestjs/swagger";


export class CategoryCreateDto{

    @ApiProperty({
        example: 'Category -1',
    })
    name: string;
}