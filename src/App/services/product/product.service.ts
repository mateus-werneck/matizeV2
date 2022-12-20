import { CreateProductDto } from '@Dtos/product/create-product.dto';
import { UpdateProductDto } from '@Dtos/product/update-product.dto';
import { ProductView } from '@Interfaces/product/product.view';
import { ProductRepository } from '@Repositories/product/product.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends Service {
  constructor(private productRepository: ProductRepository) {
    super();
  }

  async findAll(): Promise<ProductView[]> {
    const products = await this.productRepository.findAll();
    return this.treatList(products) as ProductView[];
  }

  async findByMatizeId(matizeId: string): Promise<ProductView> {
    const product = this.productRepository.findOne(matizeId);
    return this.treatItem(product) as ProductView;
  }

  async create(product: CreateProductDto): Promise<void> {
    return await this.productRepository.create(product);
  }

  async update(params: {
    matizeId: string;
    data: UpdateProductDto;
  }): Promise<void> {
    return await this.productRepository.update(params);
  }

  async remove(matizeId: string): Promise<void> {
    return await this.productRepository.remove(matizeId);
  }
}
