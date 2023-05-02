import { Column, Entity } from "typeorm"; 
import { UziBaseEntity } from "src/entities/uzi.base.entity";

@Entity()
export class Category  extends UziBaseEntity {
    
    @Column()
    name: string;

}