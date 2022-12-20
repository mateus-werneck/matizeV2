import { HttpException } from '@nestjs/common';

export class InvalidAuthException extends HttpException {
  constructor() {
    super('Invalid Credentials. Please try again.', 400);
  }
}
