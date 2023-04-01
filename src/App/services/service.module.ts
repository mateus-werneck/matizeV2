import { BasicStrategy } from '@Auth/strategies/basic.strategy';
import { DatabaseModule } from '@Database/database.module';
import { PrismaService } from '@Database/prisma/prisma.service';
import { AddressService } from '@Services/address/address.service';
import { AuthService } from '@Services/auth/auth.service';
import { CustomerService } from '@Services/customer/customer.service';
import { FileService } from '@Services/file/file.service';
import { MenuAdminService } from '@Services/menu/admin/menu.admin.service';
import { ProductService } from '@Services/product/product.service';
import { UserService } from '@Services/user/user.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
    MenuAdminService,
    UserService
  ],
  exports: [
    AddressService,
    AuthService,
    CustomerService,
    FileService,
    ProductService,
    MenuAdminService,
    UserService
  ]
})
export class ServiceModule {}
