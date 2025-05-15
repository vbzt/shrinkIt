import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('/register')
  @HttpCode(201)
  async register(@Body() data: AuthRegisterDTO){ 
    return this.authService.register(data)
  }
  
  @Post('/login')
  @HttpCode(200)
  async login(@Body() data: AuthLoginDTO){
    return this.authService.login(data)
  }

}
