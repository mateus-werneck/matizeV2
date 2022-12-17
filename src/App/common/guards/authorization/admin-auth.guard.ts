import { isValidObject } from '@Helpers/Object';
import { AuthService } from '@Middlewares/authentication/service/auth.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const { user } = context.switchToHttp().getRequest();
    const authUser = await this.authService.validateAdmin(user.email);
    return isValidObject(authUser);
  }
}
