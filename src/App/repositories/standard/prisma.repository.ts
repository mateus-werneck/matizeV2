import { PrismaService } from '@Database/prisma/prisma.service';
import { isValidObject } from '@Helpers/Object';
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
    customConditions: object = {}
  ): Promise<object[]> {
    const repository = this.getRepository();

    let conditions = {where: { deletedAt: null, ...where }}
    if (isValidObject(customConditions)) Object.assign(conditions, customConditions)

    const entities = await this.prisma[repository].findMany(conditions);
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
