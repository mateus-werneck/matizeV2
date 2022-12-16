import { HttpException } from '@nestjs/common';

export class NoContentExceptions extends HttpException {
  constructor() {
    super('No Content', 204);
  }
}
