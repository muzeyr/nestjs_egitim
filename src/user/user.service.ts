import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {

    activeUsers() {
        return [
            { id: 1, name: 'Uzi' },
            { id: 2, name: 'Oz' },
        ]
    }

    create(createUserDto: CreateUserDto) {
        return { message: 'Saved', createUserDto };

    }
}
