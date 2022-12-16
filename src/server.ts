import { MatizeLogger } from '@Log/logger.service';
import { LoggingInterceptor } from '@Middlewares/interceptors/logging.interceptor';
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
