import { DatabaseModule } from '@Database/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService],
  exports: [UserService]
})
export class ServiceModule {}
