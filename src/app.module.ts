import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username: 'nestjs_user',
      password:'nestjs_2023',
      database:'nestjs_db',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
})
export class AppModule {}
