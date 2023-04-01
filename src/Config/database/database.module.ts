import { PrismaService } from '@Database/prisma/prisma.service';
import { AddressRepository } from '@Repositories/address/address.repository';
import { PrismaAddressRepository } from '@Repositories/address/prisma.address.repository';
import { CustomerRepository } from '@Repositories/customer/customer.repository';
import { PrismaCustomerRepository } from '@Repositories/customer/prisma.customer.repository';
import { FileRepository } from '@Repositories/file/file.repository';
import { PrismaFileRepository } from '@Repositories/file/prisma.file.repository';
import { MenuAdminRepository } from '@Repositories/menu/admin/menu.admin.repository';
import { PrismaMenuAdminRepository } from '@Repositories/menu/admin/prisma.menu.admin.repository';
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
    },
    {
      provide: FileRepository,
      useClass: PrismaFileRepository
    },
    {
      provide: MenuAdminRepository,
      useClass: PrismaMenuAdminRepository
    }
  ],
  exports: [
    AddressRepository,
    CustomerRepository,
    FileRepository,
    ProductRepository,
    MenuAdminRepository,
    UserRepository
  ]
})
export class DatabaseModule {}
