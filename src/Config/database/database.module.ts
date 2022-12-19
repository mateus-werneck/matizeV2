import { PrismaService } from '@Database/prisma/prisma.service';
import { CustomerRepository } from '@Repositories/customer/customer.repository';
import { PrismaCustomerRepository } from '@Repositories/customer/prisma.customer.repository';
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
    }
  ],
  exports: [UserRepository, CustomerRepository]
})
export class DatabaseModule {}
