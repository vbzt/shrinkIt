import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectId } from "bson";


@Injectable()
export class ValidateUserIdPipe implements PipeTransform { 
  transform(value: string) {
    if(!ObjectId.isValid(value)) throw new BadRequestException('Invalid User Id')
    return value
  }
}