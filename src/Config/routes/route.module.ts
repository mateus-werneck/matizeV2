/*
https://docs.nestjs.com/modules
*/

import { UserController } from '@Controllers/users.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  controllers: [UserController]
})
export class RouteModule {}
