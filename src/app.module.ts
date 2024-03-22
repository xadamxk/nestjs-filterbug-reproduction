import { Module } from '@nestjs/common';
import { IdService } from './Id.service';
import { TestController } from './test/test.controller';
import { APP_FILTER } from '@nestjs/core';
import { AuthExceptionFilter } from './auth.filter';
import { GlobalExceptionFilter } from './global.filter';

@Module({
    providers: [IdService,     {
        provide: APP_FILTER,
        useClass: AuthExceptionFilter, // initialized - never runs
      },
      {
        provide: APP_FILTER,
        useClass: GlobalExceptionFilter, // initialized - always runs
      },],
    controllers: [TestController]
})
export class AppModule {}
