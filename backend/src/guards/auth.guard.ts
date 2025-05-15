import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate{ 

  constructor( 
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}



  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    const { authorization } = request.headers
    try {
      const data = await this.authService.checkToken((authorization || '').split(' ')[1])
      request.tokenPayload = data
      const user = await this.userService.findUserById(data.id)
      request.userData = user
      return true
    } catch (e) {
      return false
    }


  }
}