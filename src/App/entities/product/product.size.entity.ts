import { Entity } from '@Entities/standard/entity';
import { IProductSize } from '@Interfaces/product/product.size';
import { ProductSizeViewMapper } from '@Views/product/product.size.view';

export class ProductSizeEntity extends Entity {
  props: IProductSize;

  getViewClass(): typeof ProductSizeViewMapper {
    return ProductSizeViewMapper;
  }
}
