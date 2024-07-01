import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AuthExceptionFilter } from './auth.filter';
import { GlobalExceptionFilter } from './global.filter';
import { IdService } from './Id.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Multiple App Filters do work here - order of initialization matters
  // AuthExceptionFilter has the highest priority (will catch applicable exceptions first)
    // GlobalExceptionFilter has the lowest priority (will catch all other exceptions last)
  const idService = new IdService();
  app.useGlobalFilters(new GlobalExceptionFilter(idService), new AuthExceptionFilter(idService));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
