import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { DatabaseModule } from '@Database/database.module';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AddressService } from './address/address.service';
import { AuthService } from './auth/auth.service';
import { CustomerService } from './customer/customer.service';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    AddressService,
    AuthService,
    BasicStrategy,
    JwtService,
    UserService,
    CustomerService
  ],
  exports: [AddressService, AuthService, CustomerService, UserService]
})
export class ServiceModule {}
