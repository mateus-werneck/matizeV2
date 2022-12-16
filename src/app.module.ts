import { getEnvPath } from '@Helpers/env.helper';
import { RouteModule } from '@Routes/route.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const envFilePath: string = getEnvPath(`${__dirname}/Config/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    RouteModule
  ]
})
export class AppModule {}
