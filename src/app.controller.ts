import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NestJSReponse } from './common/utils/nestjs.response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return NestJSReponse.toResponse(this.appService.getHello());
  }
}
