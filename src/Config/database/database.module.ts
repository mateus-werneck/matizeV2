import { PrismaService } from '@Database/prisma/prisma.service';
import { UserRepository } from '@Entities/user-repository';
import { Module } from '@nestjs/common';

@Module({
  providers: [PrismaService, UserRepository],
  exports: [UserRepository]
})
export class DatabaseModule {}
