import { PrismaService } from '@Database/prisma/prisma.service';
import { PrismaUserRepository } from '@Repositories/user/prisma.user.repository';
import { UserRepository } from '@Repositories/user/user.repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository
    }
  ],
  exports: [UserRepository]
})
export class DatabaseModule {}
