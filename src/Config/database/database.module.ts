import { PrismaService } from '@Database/prisma/prisma.service';
import { AddressRepository } from '@Repositories/address/address.repository';
import { PrismaAddressRepository } from '@Repositories/address/prisma.address.repository';
import { CustomerRepository } from '@Repositories/customer/customer.repository';
import { PrismaCustomerRepository } from '@Repositories/customer/prisma.customer.repository';
import { PrismaProductRepository } from '@Repositories/product/prisma.product.repository';
import { ProductRepository } from '@Repositories/product/product.repository';
import { PrismaUserRepository } from '@Repositories/user/prisma.user.repository';
import { UserRepository } from '@Repositories/user/user.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: CustomerRepository,
      useClass: PrismaCustomerRepository
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository
    },
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository
    }
  ],
  exports: [
    AddressRepository,
    CustomerRepository,
    ProductRepository,
    UserRepository
  ]
})
export class DatabaseModule {}
