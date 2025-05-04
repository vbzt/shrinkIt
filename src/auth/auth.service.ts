import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService, private readonly userService: UserService){}

  async register(data: AuthRegisterDTO){ 
    if(data.confirmPassword !== data.password) throw new BadRequestException("Password and confirm password must match.")
    this.userExists(data.username, data.password)

    const { confirmPassword, ...userData } = data
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const user = await this.userService.createUser(userData)
    // todo ==> send email to user with confirmation link
    
  }


  createToken = async(userId:string) => { 
      const token = await this.jwtService.signAsync({ id: userId }, { expiresIn: '72h' })
  }

  userExists = async(username: string, email: string) => { 
    const userEmail = await this.prismaService.user.findUnique({ where: { email: email } })
    const userUsername = await this.prismaService.user.findUnique({ where: { username: username } })
    if(userEmail) throw new BadRequestException("Email is already in use")
    if(userUsername) throw new BadRequestException("Username is already in use")
    return true 
  }
}
