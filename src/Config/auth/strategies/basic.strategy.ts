import { base64decode } from '@Helpers/Hash';
import { hasText } from '@Helpers/Object';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '@Services/auth/auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      passReqToCallback: true
    });
  }

  async validate(req: any) {
    const auth = req.headers['authorization'];
    if (!hasText(auth)) {
      throw new UnauthorizedException();
    }
    const basicToken = base64decode(auth.replace('Basic ', ''));
    const [email, password] = basicToken.split(':');
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    req.user = user;
    return true;
  }
}
