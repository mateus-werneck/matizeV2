import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { CreateProductDto } from '@Dtos/product/create-product.dto';
import { UpdateProductDto } from '@Dtos/product/update-product.dto';
import { ProductService } from '@Services/product/product.service';
import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post
} from '@nestjs/common';

@Controller('products')
export class ProductAdminController extends AdminController {
  constructor(private readonly productService: ProductService) {
    super()
  }

  @Post()
  async create(@Body() data: CreateProductDto): Promise<void> {
    return await this.productService.create(data);
  }

  @Patch(':matizeId')
  async update(
    @Param('matizeId') matizeId: string,
    @Body() data: UpdateProductDto
  ): Promise<void> {
    await this.productService.update({
      matizeId,
      data
    });
  }

  @Delete(':matizeId')
  async remove(@Param('matizeId') matizeId: string): Promise<void> {
    await this.productService.remove(matizeId);
  }
}
