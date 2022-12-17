import { BasicStrategy } from '@Middlewares/authentication/strategies/basic.strategy';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private basicStrategy: BasicStrategy) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return this.basicStrategy.validate(request);
  }
}
