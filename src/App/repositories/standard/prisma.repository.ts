import { PrismaService } from '@Database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PrismaRepository {
  prisma: PrismaService;

  abstract getRepository(): string;

  abstract getEntity();

  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }

  treatEntity(entity: object) {
    const entityClass = this.getEntity();
    return new entityClass(entity);
  }

  treatList(entities: object[]) {
    return entities.map((entity) => this.treatEntity(entity));
  }

  async findAllMatize(
    where: object = {},
    include: object = {}
  ): Promise<object[]> {
    const repository = this.getRepository();
    const entities = this.prisma[repository].findMany({
      where: { deletedAt: null, ...where },
      include
    });

    return this.treatList(entities);
  }

  async softDelete(matizeId: string) {
    const repository = this.getRepository();
    await this.prisma[repository].update({
      where: { matizeId },
      data: { deletedAt: new Date() }
    });
  }

  async hardDelete(matizeId: string) {
    const repository = this.getRepository();
    await this.prisma[repository].delete({ where: { matizeId } });
  }
}
