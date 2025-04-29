import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";

export class AuthRegisterDTO{ 
  @IsString()
  @Length(3, 16)
  name: string

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
   passwword: string 
   confirmPassword: string 
}