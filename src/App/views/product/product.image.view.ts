import { ProductSizeView } from '@Interfaces/product/product.size.view';
import { ViewMapper } from '@Views/standard/view';

export class ProductImageViewMapper extends ViewMapper {
  props: ProductSizeView;

  getPropsToView(): string[] {
    return ['matizeId', 'getFile'];
  }
}
