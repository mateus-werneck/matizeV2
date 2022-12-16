import { PrismaService } from '@Database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UserRepository } from 'src/App/repositories/user-repository';

@Module({
  providers: [PrismaService, UserRepository],
  exports: [UserRepository]
})
export class DatabaseModule {}
