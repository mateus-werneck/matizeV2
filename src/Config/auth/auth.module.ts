import { decodeJwtSecret, jwtConstants } from '@Helpers/Jwt';
import { AuthService } from '@Services/auth/auth.service';
import { BasicStrategy } from '@Services/auth/strategies/basic.strategy';
import { JwtStrategy } from '@Services/auth/strategies/jwt.strategy';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@Database/database.module';

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
