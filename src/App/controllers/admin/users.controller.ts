import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { CreateUserDto } from '@Dtos/user/create-user.dto';
import { UpdateUserDto } from '@Dtos/user/update-user.dto';
import { UserView } from '@Interfaces/user/user.view';
import { UserService } from '@Services/user/user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request
} from '@nestjs/common';

@Controller('admin/users')
export class UserController extends AdminController {
  constructor(private readonly userService: UserService) {
    super();
  }

  @Get()
  async findAll(): Promise<UserView[]> {
    return this.userService.findAll();
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<UserView> {
    return await this.userService.findByEmail(email);
  }

  @Get('id/:matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<UserView> {
    return await this.userService.findByMatizeId(matizeId);
  }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<void> {
    return await this.userService.create(user);
  }

  @Patch()
  async update(@Request() req, @Body() data: UpdateUserDto): Promise<void> {
    await this.userService.update({
      matizeId: req.user.matizeId,
      data
    });
  }
}
