import { ProductSizeView } from '@Interfaces/product/product.size.view';
import { ViewMapper } from '@Views/standard/view';

export class ProductSizeViewMapper extends ViewMapper {
  props: ProductSizeView;

  getPropsToView(): string[] {
    return [
      'internalName',
      'friendlyName'
    ];
  }
}
