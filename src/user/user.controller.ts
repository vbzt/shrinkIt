import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}
    @Post('')
    async createUser(@Body() data: CreateUserDTO) { 
      return this.userService.createUser(data)
    }
}
