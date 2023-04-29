import { Public } from '@Decorators/public.decorator';
import { ProductView } from '@Interfaces/product/product.view';
import { ProductService } from '@Services/product/product.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Public()
  async findAll(): Promise<ProductView[]> {
    return await this.productService.findAll();
  }

  @Get(':matizeId')
  @Public()
  async findOne(@Param('matizeId') matizeId: string): Promise<ProductView> {
    return await this.productService.findByMatizeId(matizeId);
  }
}
