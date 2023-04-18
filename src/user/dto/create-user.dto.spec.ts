import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './create-user.dto';
import { validate } from 'class-validator';

describe('CreateUserDto', () => {
  let module: TestingModule;
  let createUserDto: CreateUserDto;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [CreateUserDto],
    }).compile();
    createUserDto = module.get<CreateUserDto>(CreateUserDto);
  });

  it('should be defined', () => {
    expect(createUserDto).toBeDefined();
  });

  it('should have a name', async () => {
    createUserDto.name = '';

    const errors = await validate(createUserDto);
    console.log(errors);
    expect(errors.length).toBeGreaterThan(0);

    expect(errors[0].property).toEqual('name');
    expect(errors[0].constraints).toHaveProperty(
      'minLength:',
      'name must be longer than or equal to 3 characters',
    );
  });

  it('should have a valid email', async () => {
    createUserDto.email = 'muzeyrgmail.com';
    createUserDto.name = 'Uzeyr OZCAN';

    const errors = await validate(createUserDto);
    console.log(errors);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toEqual('email');
    expect(errors[0].constraints).toHaveProperty(
      'isEmail',
      'email must be an email',
    );
  });

  afterEach(async () => {
    await module.close();
  });
});
