

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Inject, Logger } from '@nestjs/common';
import { IdService } from './Id.service';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(
    @Inject(IdService) private readonly idService: IdService,
  ) {
    console.log("global-filter initialized");
}

  catch(exception: Error, host: ArgumentsHost) {
    // Simplied
    console.log("in global-filter");
    const response = host.switchToHttp().getResponse();
    const errorId = this.idService.getId();
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({errorId: errorId, message: 'Internal server error'});
  }
}