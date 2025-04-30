import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator"

export class CreateUserDTO{ 
  @IsString()
  @Length(3, 16)
  username: string

  @IsEmail()
  email: string

   @IsString()
   @IsStrongPassword({ 
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1
   })
   password: string 
}