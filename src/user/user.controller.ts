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
import { NestJSReponse as NestJSResponse } from 'src/common/utils/nestjs.response';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async activeUsers() {
    return NestJSResponse.toResponseArray(await this.userService.activeUsers());
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return NestJSResponse.toResponse(
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
    return NestJSResponse.toResponse(
      await this.userService.update(updateUserDto),
      'Kullanıcı başarıyla güncellendi',
    );
  }

  @Delete(':id')
  async delete(@Param('id') userId: string) {
    return NestJSResponse.toResponse(
      await this.userService.delete(userId),
      'Kullanıcı başarıyla silindi',
    );
  }
}
