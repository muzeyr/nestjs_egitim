import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NestJSReponse } from 'src/common/utils/nestjs.response';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async activeUsers() {
    return NestJSReponse.toResponseArray(await this.userService.activeUsers());
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return NestJSReponse.toResponse(
      await this.userService.create(createUserDto),
      'Kullanıcı başarıyla kaydedildi',
    );
  }
  @Put(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    updateUserDto.id = userId;
    return NestJSReponse.toResponse(
      await this.userService.update(updateUserDto),
      'Kullanıcı başarıyla güncellendi',
    );
  }

  @Delete(':id')
  async delete(@Param('id') userId: string) {
    return NestJSReponse.toResponse(
      await this.userService.delete(userId),
      'Kullanıcı başarıyla silindi',
    );
  }
}
