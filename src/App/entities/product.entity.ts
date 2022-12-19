import { IProduct } from '@Interfaces/product/product';
import { ProductViewMapper } from '@Views/product/product.view';
import { Entity } from './standard/entity';

export class ProductEntity extends Entity {
  props: IProduct;

  getViewClass(): typeof ProductViewMapper {
    return ProductViewMapper;
  }

  get price(): number {
    return Number(this.props.price)
  }
}
