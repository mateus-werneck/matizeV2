import { PrismaRepository } from "@Repositories/standard/prisma.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductImageRepository extends PrismaRepository{
  
  getRepository(): string {
    return 'productImage'
  }

  getEntity(): string {
    return ''
  }

  async create(fileMatizeId: string, ownerMatizeId: string) {
    return await this.prisma.productImage.create({ data: {fileMatizeId, productMatizeId: ownerMatizeId} });
  }
}
