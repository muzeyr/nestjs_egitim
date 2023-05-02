import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_HOST),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [User, Product, Category],
        synchronize: true,
      }),
    }),
    /*
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestjs_user',
      password: 'nestjs_2023',
      database: 'nestjs_db',
      entities: [User],
      synchronize: true,
    }),
    */
    UserModule,
    ConfigModule.forRoot({
      load: [config],
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class AppModule {}
