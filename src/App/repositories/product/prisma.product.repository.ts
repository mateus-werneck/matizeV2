import { ProductEntity } from '@Entities/product.entity';
import { ProductRepository } from '@Repositories/product/product.repository';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductRepository
  extends PrismaRepository
  implements ProductRepository
{
  getEntity(): typeof ProductEntity {
    return ProductEntity;
  }

  async findOne(matizeId: string): Promise<ProductEntity> {
    const product = this.prisma.product.findFirstOrThrow({
      where: { matizeId }
    });
    return this.treatEntity(product)
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany();
    return this.treatList(products)
  }

  create: (data: object) => Promise<void>;

  update: (params: { matizeId: string; data: object }) => Promise<void>;

  remove: (matizeId: string) => Promise<void>;
}
