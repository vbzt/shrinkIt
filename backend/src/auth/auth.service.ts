import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { User } from '@prisma/client';
import { AuthLoginDTO } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService, private readonly userService: UserService){}

  async register(data: AuthRegisterDTO){ 
    if(data.confirmPassword !== data.password) throw new BadRequestException("Password and confirm password must match.")
    await this.userExists(data.username, data.email)

    const { confirmPassword, ...userData } = data
    const user = (await this.userService.createUser(userData)).data.user
    // TODO: send email to user with confirmation link
    const userToken = await this.createToken(user)
    return { message: "User created successfully", data: { user, token: userToken } }
  }


  async login(data: AuthLoginDTO){ 
    const user = await this.prismaService.user.findUnique( { where: { email: data.email } } )
    if(!user) throw new UnauthorizedException("Invalid email or password")
    const isPasswordValid = await bcrypt.compare(data.password, user.password)
    if(!isPasswordValid) throw new UnauthorizedException("Invalid email or password")
    if(!user.emailConfirmed) throw new ForbiddenException("User is already registered, please check your email to confirm your account")

    const userToken = await this.createToken(user)
    const { password, ...userData } = user
    return { message: "Logged in successfully", data: { userData, token: userToken } }
  }


  createToken = async(user: User) => { 
      const token = this.jwtService.sign({ id: user.id , username: user.username, email: user.email}, { expiresIn: '72h', subject: user.id, audience: "users", issuer: "login" })
      return token
  }

  checkToken = async(token: string) => { 
    try {
      const userData = await this.jwtService.verify(token, { audience: "users", issuer: "login"})
      return userData 
    }catch (e) {
      throw new UnauthorizedException("Invalid token")
    }
  }

  isValidToken = async(token: string) => { 
    try{ 
      await this.checkToken(token)
      return true
    }catch(e){
      return false
    } 
  }

  userExists = async(username: string, email: string) => { 
    const userEmail = await this.prismaService.user.findUnique({ where: { email } })
    const userUsername = await this.prismaService.user.findUnique({ where: { username } })
    if(userEmail) throw new BadRequestException("Email is already in use")
    if(userUsername) throw new BadRequestException("Username is already in use")
    return true 
  }
}
