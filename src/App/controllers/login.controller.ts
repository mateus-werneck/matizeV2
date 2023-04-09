import { Public } from '@Decorators/public.decorator';
import { BasicAuthGuard } from '@Guards/authentication/basic-auth.guard';
import { AuthService } from '@Services/auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

@Controller()
export class LoginController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(BasicAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Get('user/profile')
  getProfile(@Request() req) {
    const user = req.user;
    delete user['iat'];
    return user;
  }
}
