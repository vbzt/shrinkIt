import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShortenUrlDTO } from './dto/shorten-url.dto';
import { UnshortenUrlDTO } from './dto/unshorten-url.dto';
import { OpenUrlDTO } from './dto/open-url.dto';
import * as qrcode from 'qrcode'
import { Response } from 'express';

@Injectable()
export class UrlService {

  constructor(private readonly prismaService: PrismaService) {}


  async createShortUrl({ customSlug, url }: ShortenUrlDTO, userId: string){ 
    if(customSlug) { 
      const slugExists = await this.slugExists(customSlug)
      if(slugExists) throw new ConflictException('Slug already exists')
      return this.prismaService.shortenUrl.create({ data: { slug: customSlug, url, userId }})
    }

    const slug = await this.createRandomSlug()
    return this.prismaService.shortenUrl.create({ data: { slug, url, userId }})
  }

  async unshortenUrl({ slug }: UnshortenUrlDTO){ 
    const urlExists = await this.slugExists(slug)
    if(!urlExists) throw new NotFoundException('Shrinked url does not exists')
    const url = await this.prismaService.shortenUrl.findUnique( { where: { slug } } )
    return url
  }

  async openUrl({ slug }: OpenUrlDTO){ 
    const { urlData, exists } = await this.slugExists(slug)
    if(!exists || !urlData ) throw new NotFoundException('Shrinked url does not exists')
    return urlData.url
    
  }


  // TODO: Report URL 

  async generateQrCode(res: Response, data: ShortenUrlDTO, userId: string){ 
    const shortenedUrl = await this.createShortUrl(data, userId)
    const qrCode = await qrcode.toBuffer(shortenedUrl.url, { type: 'png' })
    res.setHeader('Content-Type', 'image/png')
    res.send(qrCode)
  }


  createRandomSlug = async (l = 6) => { 
    const chars = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', l);
    const slug = chars() 
    const { exists } = await this.slugExists(slug)
    if(exists) return this.createRandomSlug()
    return slug

  }

  slugExists = async (slug: string) => { 
    const slugExists = await this.prismaService.shortenUrl.findUnique( { where: { slug } } )
    if(slugExists !== null) return { exists: true, urlData: slugExists }
    return { exists: false }
  }
}
