import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ApiParam } from '@nestjs/swagger';
import { ValidateUserIdPipe } from './pipes/validate-user-id.pipe';
import { UserExistsPipe } from './pipes/user-exists.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

    @Post('')
    async createUser(@Body() data: CreateUserDTO) { 
      return this.userService.createUser(data)
    }

    @Patch('/:id')
    @ApiParam({ name: 'id', type: String, description: "User's objectID" })
    async updatedUser(@Param('id', ValidateUserIdPipe, UserExistsPipe) id: string , @Body() data: UpdateUserDTO) { 
      return this.userService.updateUser(id, data)
    } 

    @Delete('/:id')
    @ApiParam({ name: 'id', type: String, description: "User's objectID" })
    async deleteUser(@Param('id', ValidateUserIdPipe, UserExistsPipe) id: string) { 
      return this.userService.deleteUser(id)
    }
}
