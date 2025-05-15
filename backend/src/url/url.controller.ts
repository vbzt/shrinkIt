import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { ShortenUrlDTO } from './dto/shorten-url.dto';
import { Response } from 'express';
import { User } from 'src/decorator/user.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UrlService } from './url.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('url')
export class UrlController {

  constructor(private readonly urlService: UrlService) {} 

  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  @Post('/qrcode')
  async generateQrCode(@Body() data: ShortenUrlDTO, @Res() res: Response, @User('id') userId: string){ 
    return this.urlService.generateQrCode(res, data, userId)
  } 
}
