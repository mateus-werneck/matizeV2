import { AuthModule } from '@Auth/auth.module';
import { getEnvPath } from '@Helpers/env.helper';
import { RouteModule } from '@Routes/route.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminRouteModule } from '@Routes/admin.route.module';

const envFilePath: string = getEnvPath(process.cwd());

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    AdminRouteModule,
    RouteModule
  ]
})
export class AppModule {}
