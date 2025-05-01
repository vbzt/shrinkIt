import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserExistsPipe } from './pipes/user-exists.pipe';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
