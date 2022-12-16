import { HttpException } from '@nestjs/common';
export class NoContent extends HttpException {
  constructor() {
    super('No Content', 204);
  }
}
