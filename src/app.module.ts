import { getEnvPath } from '@Helpers/env.helper';
import { RouteModule } from '@Routes/route.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Config/auth/auth.module';

const envFilePath: string = getEnvPath(`${__dirname}/Config/envs`);

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    RouteModule
  ]
})
export class AppModule {}
