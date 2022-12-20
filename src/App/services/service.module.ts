import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { DatabaseModule } from '@Database/database.module';
import { PrismaService } from '@Database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AddressService } from './address/address.service';
import { AuthService } from './auth/auth.service';
import { CustomerService } from './customer/customer.service';
import { FileService } from './file/file.service';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    AddressService,
    AuthService,
    BasicStrategy,
    CustomerService,
    FileService,
    JwtService,
    PrismaService,
    ProductService,
    UserService
  ],
  exports: [
    AddressService,
    AuthService,
    CustomerService,
    FileService,
    ProductService,
    UserService
  ]
})
export class ServiceModule {}
