import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable() 
export class UserService { 
  constructor( private readonly prismaService: PrismaService){}

  async createUser(data: CreateUserDTO){ 
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const user = await this.prismaService.user.create( { data: { username: data.username, email: data.email, password:hashedPassword} } )
    return { statusCode: 201, message: "User created successfully", data: {user} }
  }
} 