import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
})
export class AppModule {}
