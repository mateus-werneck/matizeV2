import { CreateUserDto } from '@Dtos/user/create-user.dto';
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
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AdminGuard, IpGuard)
  async findAll(): Promise<UserView[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  @UseGuards(AdminGuard, IpGuard)
  async findByEmail(@Param('email') email: string): Promise<UserView> {
    return await this.userService.findByEmail(email);
  }

  @Get(':matizeId')
  @UseGuards(AdminGuard, IpGuard)
  async findOne(@Param('matizeId') matizeId: string): Promise<UserView> {
    const user = await this.userService.findByMatizeId(matizeId);
    return user.toView() as UserView
  }

  @Post()
  @UseGuards(AdminGuard, IpGuard)
  async create(@Body() user: CreateUserDto): Promise<void> {
    return await this.userService.create(user);
  }

  @Patch()
  @UseGuards(AdminGuard, IpGuard)
  async update(@Request() req, @Body() data: UpdateUserDto): Promise<void> {
    await this.userService.update({
      matizeId: req.user.matizeId,
      data
    });
  }
}
