import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class IpGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    if (process.env.NODE_ENV == 'production') {
      const request = context.switchToHttp().getRequest();
      const ipRequest = String(request.ip).replace('::ffff:', '');
      const whitelist = process.env.ADMIN_WHITELIST?.split(',');
      return whitelist !== undefined && whitelist.includes(ipRequest);
    }
    return true;
  }
}
