import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { AddressAdminController } from '@Controllers/admin/address.admin.controller';
import { CustomerAdminController } from '@Controllers/admin/customer.admin.controller';
import { AdminDashboardController } from '@Controllers/admin/dashboard.admin.controller';
import { FileAdminController } from '@Controllers/admin/file.admin.controller';
import { ProductAdminController } from '@Controllers/admin/product.admin.controller';
import { UserController } from '@Controllers/admin/users.controller';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [
    AddressAdminController,
    AdminDashboardController,
    CustomerAdminController,
    FileAdminController,
    ProductAdminController,
    UserController
  ]
})
export class AdminRouteModule {}
