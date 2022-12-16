import { Public } from '@Decorators/public.decorator';
import {
  Controller,
  Get
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService ) {}

  @Public()
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
