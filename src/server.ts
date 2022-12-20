import { LoggingInterceptor } from '@Interceptors/logging.interceptor';
import { MatizeLogger } from '@Log/logger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new MatizeLogger();
  const app = await NestFactory.create(AppModule, {
    logger
  });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new LoggingInterceptor(logger)
  );
  await app.listen(3333);
}
bootstrap();
