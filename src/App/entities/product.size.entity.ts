import { IProductSize } from '@Interfaces/product/product.size';
import { ProductSizeViewMapper } from '@Views/product/product.size.view';
import { Entity } from './standard/entity';

export class ProductSizeEntity extends Entity {
  props: IProductSize;

  getViewClass(): typeof ProductSizeViewMapper {
    return ProductSizeViewMapper;
  }
  
}
