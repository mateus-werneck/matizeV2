import { hasText, isValidObject } from '@Helpers/Object';
import { MatizeLogger } from '@Log/logger';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: MatizeLogger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const request = getRequestToLog(context.switchToHttp().getRequest());
        request['statusCode'] = response.statusCode;
        isValidObject(request) &&
          this.logger.log(
            '(' + (Date.now() - start) + ' ms) ' + JSON.stringify(request)
          );
      })
    );
  }
}

function getRequestToLog(request: object) {
  const requestLog = {
    Route: request['url'],
    Method: request['method'],
    Body: request['body']
  };
  if (hasText(request['user'])) {
    requestLog['Bearer'] = {
      matizeId: request['user']['matizeId'],
      email: request['user']['email']
    };
  }
  return requestLog;
}
