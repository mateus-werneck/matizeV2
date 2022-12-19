import { Public } from '@Decorators/public.decorator';
import { CreateProductDto } from '@Dtos/product/create-product.dto';
import { UpdateProductDto } from '@Dtos/product/update-product.dto';
import { AdminGuard } from '@Guards/authorization/admin-auth.guard';
import { IpGuard } from '@Guards/authorization/ip-auth.guard';
import { ProductView } from '@Interfaces/product/product.view';
import { ProductService } from '@Services/product/product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Public()
  async findAll(): Promise<ProductView[]> {
    return this.productService.findAll();
  }

  @Get(':matizeId')
  @Public()
  async findOne(@Param('matizeId') matizeId: string): Promise<ProductView> {
    return await this.productService.findByMatizeId(matizeId);
  }

  @Post()
  @UseGuards(AdminGuard, IpGuard)
  async create(@Body() data: CreateProductDto): Promise<void> {
    return await this.productService.create(data);
  }

  @Patch(':matizeId')
  @UseGuards(AdminGuard, IpGuard)
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
  @UseGuards(AdminGuard, IpGuard)
  async remove(@Param('matizeId') matizeId: string): Promise<void> {
    await this.productService.remove(matizeId);
  }
}
