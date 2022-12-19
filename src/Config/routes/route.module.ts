import { CustomerController } from '@Controllers/customer.controller';
import { LoginController } from '@Controllers/login.controller';
import { UserController } from '@Controllers/users.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';
import { BasicStrategy } from '../auth/strategies/basic.strategy';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [CustomerController, LoginController, UserController]
})
export class RouteModule {}
