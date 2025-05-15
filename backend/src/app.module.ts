import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ResendModule } from 'nest-resend';
import { UrlModule } from './url/url.module';

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}


@Module({
  imports: [
    ResendModule.forRoot({apiKey: resendApiKey,}),
    UserModule, 
    AuthModule, 
    PrismaModule, 
    UrlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
