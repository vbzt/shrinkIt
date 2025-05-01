import { ArgumentMetadata, Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { UserService } from "../user.service";

@Injectable()
export class UserExistsPipe implements PipeTransform{ 
  constructor(private readonly userService: UserService) {}
  async transform(value: string) {
    const user = await this.userService.findUserById(value)
    if(!user) throw new NotFoundException('User does not exists')
    return value 
  
    
  }
}