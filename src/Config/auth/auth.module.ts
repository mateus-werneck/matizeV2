import { decodeJwtSecret, jwtConstants } from '@Helpers/Jwt';
import { AuthService } from '@Services/auth/auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@Database/database.module';
import { BasicStrategy } from './strategies/basic.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: decodeJwtSecret(jwtConstants.secret),
        signOptions: { expiresIn: process.env.EXPIRES_IN }
      })
    })
  ],
  providers: [AuthService, BasicStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
