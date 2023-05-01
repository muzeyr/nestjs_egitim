import { UziBaseEntity } from "src/entities/uzi.base.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToOne } from "typeorm";


@Entity()
export class Category extends UziBaseEntity {

    @Column()
    name: string
}