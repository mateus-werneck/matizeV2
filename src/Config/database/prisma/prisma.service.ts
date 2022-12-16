import { DatabaseLogger } from '@Log/db.logger.service';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, 'query' | 'error'>
  implements OnModuleInit
{
  private readonly logger = new DatabaseLogger();
  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query'
        },
        {
          emit: 'event',
          level: 'error'
        }
      ]
    });
  }
  async onModuleInit() {
    this.$on('query', (event) => {
      this.logger.log('(' + event.duration + ' ms) ' + event.query);
    });
    this.$on('error', (event) => {
      this.logger.error(event.message);
    });
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
