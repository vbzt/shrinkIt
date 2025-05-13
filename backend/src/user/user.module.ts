import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserExistsPipe } from './pipes/user-exists.pipe';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

