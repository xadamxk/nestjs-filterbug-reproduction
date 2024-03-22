import { ArgumentsHost, Catch, ExceptionFilter, ForbiddenException, HttpException, HttpStatus, Inject, Logger } from '@nestjs/common';
import { IdService } from './Id.service';

@Catch(ForbiddenException)
export class AuthExceptionFilter implements ExceptionFilter {
  constructor(
    @Inject(IdService) private readonly idService: IdService,
  ) {
    console.log("auth-filter initialized");
}

  catch(exception: Error, host: ArgumentsHost) {
    // Simplied
    console.log("in auth-filter");
    const response = host.switchToHttp().getResponse();
    const errorId = this.idService.getId();
    return response.status(HttpStatus.UNAUTHORIZED).send({errorId: errorId, message: 'Unauthorized'});
  }
}