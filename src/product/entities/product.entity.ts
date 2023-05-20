import { Category } from 'src/category/entities/category.entity';
import { UziBaseEntity } from 'src/entities/uzi.base.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
@Entity()
export class Product extends UziBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(()=>Category, {nullable:true})
  category?: Category;

  @Column()
  categoryId: string;

  @Column()
  description: string;

  @Column()
  imageUrl2: string;
 
}
