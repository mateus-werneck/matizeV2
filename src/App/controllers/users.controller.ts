import { Public } from '@Decorators/public.decorator';
import { UserViewProps } from '@Interfaces/user/user.view';
import {
  Controller,
  Get
} from '@nestjs/common';
import { UserService } from '../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService ) {}

  @Public()
  @Get()
  async findAll(): Promise<UserViewProps[]> {
    return this.userService.findAll()
    
  }
}
