import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @Post('/register')
  async register(@Body() data: AuthRegisterDTO){ 
    return this.authService.register(data)
  }

}
