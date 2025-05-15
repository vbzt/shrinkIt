import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe( { whitelist: true, forbidNonWhitelisted: true, transform: true}))
  const config = new DocumentBuilder().setTitle('ShrinkIt API').setDescription('API para encurtar URLs').setVersion('1.0').addBearerAuth( { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token').build();
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
