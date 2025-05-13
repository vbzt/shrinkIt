import { IsString } from "class-validator";

export class UnshortenUrlDTO{ 

  @IsString()
  slug: string
}