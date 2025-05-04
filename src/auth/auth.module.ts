import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule, JwtModule.register({ secret: process.env.JWT_SECRET, signOptions: { expiresIn: '72h' } })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
