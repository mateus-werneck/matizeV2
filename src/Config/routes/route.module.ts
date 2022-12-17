/*
https://docs.nestjs.com/modules
*/

import { UserController } from '@Controllers/users.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';
import { LoginController } from '@Controllers/login.controller';
import { BasicStrategy } from '../auth/strategies/basic.strategy';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [UserController, LoginController]
})
export class RouteModule {}
