import { CreateProductDto } from '@Dtos/product/create-product.dto';
import { UpdateProductDto } from '@Dtos/product/update-product.dto';
import { ProductEntity } from '@Entities/product.entity';
import { IProductRepository } from '@Interfaces/product/product.repository';

export abstract class ProductRepository implements IProductRepository {
  abstract findOne: (matizeId: string) => Promise<ProductEntity>;
  abstract findAll: () => Promise<ProductEntity[]>;
  abstract create: (data: CreateProductDto) => Promise<void>;
  abstract update: (params: {
    matizeId: string;
    data: UpdateProductDto;
  }) => Promise<void>;
  abstract remove: (matizeId: string) => Promise<void>;
}
