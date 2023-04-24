import { UziBaseEntity } from 'src/entities/uzi.base.entity';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends UziBaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDay: Date;

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
