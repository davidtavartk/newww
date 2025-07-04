import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { LoggingService } from './common/logging/logging.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/doc', (req, res, next) => {
    req.isPublic = true;
    next();
  });

  const loggingService = app.get(LoggingService);

  process.on('uncaughtException', (error: Error) => {
    loggingService.error(
      `Uncaught Exception: ${error.message}`,
      error.stack,
      'Process',
    );
    process.exit(1);
  });

  process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    loggingService.error(
      `Unhandled Rejection at Promise: ${promise} - Reason: ${reason}`,
      reason?.stack,
      'Process',
    );
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(loggingService));
  app.useGlobalInterceptors(new LoggingInterceptor(loggingService));
  app.enableCors();

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
