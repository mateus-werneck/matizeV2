import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { ServiceModule } from '@Services/service.module';
import { Module } from '@nestjs/common';
import { AdminAddressController } from '@Controllers/admin/address.controller';

@Module({
  imports: [ServiceModule],
  providers: [BasicStrategy],
  controllers: [AdminAddressController]
})
export class AdminRouteModule {}
