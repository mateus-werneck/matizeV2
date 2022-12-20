import { ProductView } from '@Interfaces/product/product.view';
import { ViewMapper } from '@Views/standard/view';

export class ProductViewMapper extends ViewMapper {
  props: ProductView;

  getPropsToView(): string[] {
    return [
      'matizeId',
      'name',
      'description',
      'get_price',
      'quantity',
      'internalName',
      'getSize',
      'getType',
      'getImages'
    ];
  }
}
