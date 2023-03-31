import { CreateProductDto } from '@Dtos/product/create-product.dto';
import { UpdateProductDto } from '@Dtos/product/update-product.dto';
import { ProductEntity } from '@Entities/product/product.entity';
import { isValidObject, treatObject } from '@Helpers/Object';
import { ProductRepository } from '@Repositories/product/product.repository';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaProductRepository
  extends PrismaRepository
  implements ProductRepository
{
  getRepository(): string {
    return 'product';
  }

  getEntity(): typeof ProductEntity {
    return ProductEntity;
  }

  async findOne(matizeId: string): Promise<ProductEntity> {
    const product = this.prisma.product.findFirstOrThrow({
      where: { matizeId },
      include: {
        type: true,
        size: true,
        images: { include: { file: true } }
      }
    });
    return this.treatEntity(product);
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.prisma.product.findMany({
      include: {
        type: true,
        size: true,
        images: { include: { file: true } }
      }
    });
    return this.treatList(products);
  }

  async create(data: CreateProductDto): Promise<void> {
    treatObject(data);
    await this.prisma.product.create({ data });
  }

  async update(params: {
    matizeId: string;
    data: UpdateProductDto;
  }): Promise<void> {
    const { matizeId, data } = params;

    treatObject(data);

    if (!isValidObject(data)) {
      return;
    }

    await this.prisma.product.update({
      where: { matizeId },
      data
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId);
  }
}
