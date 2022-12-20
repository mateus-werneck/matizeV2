import { JwtAuthGuard } from '@Guards/authentication/jwt-auth.guard';
import { getEnvPath } from '@Helpers/env.helper';
import { RouteModule } from '@Routes/route.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './Config/auth/auth.module';
import { BasicStrategy } from './Config/auth/strategies/basic.strategy';

const envFilePath: string = getEnvPath(`${__dirname}/Config/envs`);

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    RouteModule
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }, BasicStrategy]
})
export class AppModule {}
