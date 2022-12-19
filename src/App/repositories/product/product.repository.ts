import { ProductEntity } from '@Entities/product.entity';
import { IProductRepository } from '@Interfaces/product/product.repository';

export abstract class ProductRepository implements IProductRepository {
  abstract findOne: (matizeId: string) => Promise<ProductEntity>;
  abstract findAll: () => Promise<ProductEntity[]>;
  abstract create: (data: object) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: object;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
