import { IProductType } from '@Interfaces/product/product.type';
import { ProductTypeViewMapper } from '@Views/product/product.type.view';
import { Entity } from './standard/entity';

export class ProductTypeEntity extends Entity {
  props: IProductType;

  getViewClass(): typeof ProductTypeViewMapper {
    return ProductTypeViewMapper;
  }
}
