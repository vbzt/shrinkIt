import { createParamDecorator, ExecutionContext, NotFoundException } from "@nestjs/common";

export const User = createParamDecorator( ( args: string, context: ExecutionContext ) => { 
  const request = context.switchToHttp().getRequest()
  const user = request.userData
  if(!user) throw new NotFoundException('User not found')
  if(args) return user[args]
  return user
})