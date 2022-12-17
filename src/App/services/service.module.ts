import { DatabaseModule } from '@Database/database.module';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BasicStrategy } from 'src/Config/auth/strategies/basic.strategy';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, AuthService, JwtService, BasicStrategy],
  exports: [UserService, AuthService]
})
export class ServiceModule {}
