import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { AddressController } from '@Controllers/address.controller';
import { CustomerController } from '@Controllers/customer.controller';
import { FileController } from '@Controllers/file.controller';
import { LoginController } from '@Controllers/login.controller';
import { ProductController } from '@Controllers/product.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [
    AddressController,
    CustomerController,
    FileController,
    LoginController,
    ProductController
  ]
})
export class RouteModule {}
