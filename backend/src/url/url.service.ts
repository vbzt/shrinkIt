import { ConflictException, Injectable } from '@nestjs/common';
import { customAlphabet } from 'nanoid';
import { PrismaService } from 'src/prisma/prisma.service';
import { url } from 'inspector';
import { shortenUrlDTO } from './dto/shortenUrl.dto';

@Injectable()
export class UrlService {

  constructor(private readonly prismaService: PrismaService) {}


  async createShortUrl({ customSlug, url }: shortenUrlDTO, userId: string){ 
    if(customSlug) { 
      const slugExists = await this.slugExists(customSlug)
      if(slugExists) throw new ConflictException('Slug already exists')
      return this.prismaService.shortenUrl.create({ data: { slug: customSlug, url, userId }})
    }

    const slug = await this.createRandomSlug()
    return this.prismaService.shortenUrl.create({ data: { slug, url, userId }})
  }



  createRandomSlug = async (l = 6) => { 
    const chars = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', l);
    const slug = chars() 
    if(await this.slugExists(slug)) return this.createRandomSlug()
    return slug

  }

  slugExists = async (slug: string) => { 
    const slugExists = await this.prismaService.shortenUrl.findUnique( { where: { slug } } )
    return slugExists !== null
  }
}
