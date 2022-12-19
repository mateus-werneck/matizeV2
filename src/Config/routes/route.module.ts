import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { AddressController } from '@Controllers/address.controller';
import { CustomerController } from '@Controllers/customer.controller';
import { LoginController } from '@Controllers/login.controller';
import { UserController } from '@Controllers/users.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [
    AddressController,
    CustomerController,
    LoginController,
    UserController
  ]
})
export class RouteModule {}
