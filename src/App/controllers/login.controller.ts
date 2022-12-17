import { Public } from '@Decorators/public.decorator';
import { BasicAuthGuard } from '@Guards/authentication/basic-auth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '@Services/auth/auth.service';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(BasicAuthGuard)
  @Get('auth/login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Get('user/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
