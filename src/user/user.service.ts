import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable() 
export class UserService { 
  constructor( private readonly prismaService: PrismaService){}

  async createUser(data: CreateUserDTO){ 
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const token = crypto.randomUUID()
    const tokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000)
    const user = await this.prismaService.user.create( { data: { username: data.username, email: data.email, password:hashedPassword, tokenExpiresAt, confirmationToken: token} } )
    return { message: "User created successfully", data: { user } }
  }

  async updateUser(id: string, data: UpdateUserDTO){ 
    if(data.password){ 
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(data.password, salt)
      data.password = hashedPassword
    }

    const updatedUser = await this.prismaService.user.update( { where: { id: id }, data })
    return { message: "User updated successfully", data: {updatedUser} }
  }

  async deleteUser(id: string){
    const deletedUser = await this.prismaService.user.delete( { where: { id } })
    return { message: "User deleted successfully", data: {deletedUser} }

  }

  findUserById = async (id: string) => { 
    const user = await this.prismaService.user.findUnique({ where: { id: id } })
    return user
  }
} 