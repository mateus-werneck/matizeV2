import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BasicStrategy } from 'src/Config/auth/strategies/basic.strategy';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private basicStrategy: BasicStrategy) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return this.basicStrategy.validate(request);
  }
}
