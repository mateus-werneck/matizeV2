import { Entity } from '@Entities/standard/entity';
import { IProductType } from '@Interfaces/product/product.type';
import { ProductTypeViewMapper } from '@Views/product/product.type.view';

export class ProductTypeEntity extends Entity {
  props: IProductType;

  getViewClass(): typeof ProductTypeViewMapper {
    return ProductTypeViewMapper;
  }
}
