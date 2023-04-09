import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto copy';
import { IsDefined } from 'class-validator';
@Injectable()
export class UserService {
    
    
    private readonly logger: Logger = new Logger(this.constructor.name);

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>){

        }

    async activeUsers() {
        return await this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto) {
         
        const newUser = await this.userRepository.create();
        newUser.id = uuidv4();
        newUser.email = createUserDto.email;
        newUser.name = createUserDto.name;
        await this.userRepository.save(newUser);

        this.logger.warn(JSON.stringify(newUser));
        return { message: 'Saved', newUser };

    }
    
    async update(updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOne({
            where:{
                id: updateUserDto.id,
            }
        });
        if (user){
            user.name = updateUserDto.name;
            user.email = updateUserDto.email;
        } else {

        }
        return await this.userRepository.save(user);
    }

    async delete(userId: string) {
        return await this.userRepository.softDelete(userId);
    }

   
}
