import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { AdminGuard } from '@Guards/authorization/admin-auth.guard';
import { IpGuard } from '@Guards/authorization/ip-auth.guard';
import { UserView } from '@Interfaces/user/user.view';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Request,
  UseGuards
} from '@nestjs/common';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AdminGuard, IpGuard)
  @Get()
  async findAll(): Promise<UserView[]> {
    return this.userService.findAll();
  }

  @UseGuards(AdminGuard, IpGuard)
  @Get(':email')
  @UseGuards(AdminGuard, IpGuard)
  async findOne(@Param('email') email: string): Promise<UserView> {
    return await this.userService.findByEmail(email);
  }

  @UseGuards(AdminGuard, IpGuard)
  @Patch()
  async update(@Request() req, @Body() data: UpdateUserDto): Promise<void> {
    await this.userService.update({
      matizeId: req.user.matizeId,
      data
    });
  }
}
