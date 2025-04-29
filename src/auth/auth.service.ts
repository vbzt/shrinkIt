import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService){}

  async register(data: AuthRegisterDTO){ 

  }
}
