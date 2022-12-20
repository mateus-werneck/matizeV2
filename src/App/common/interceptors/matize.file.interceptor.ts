import { FileInterceptor } from '@nestjs/platform-express';

export function MatizeFileInterceptor() {
  return FileInterceptor('file', {
    dest: './tmp',
    limits: { fileSize: 2 * Math.pow(10, 6) }
  });
}
