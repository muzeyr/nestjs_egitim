import { ApiProperty } from "@nestjs/swagger";


export class CategoryCreateUpdateDto{

    @ApiProperty({
        example:'Category -1',
        description:'Category description... '
    })
    name: string;
}