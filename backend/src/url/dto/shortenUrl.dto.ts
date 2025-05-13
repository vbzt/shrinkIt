import { IsOptional, IsString, Min } from "class-validator";

export class shortenUrlDTO {
  
  @IsOptional()
  @IsString()
  @Min(3)
  customSlug: string 

  @IsString()
  url: string

  
}