import { ProductTypeView } from '@Interfaces/product/product.type.view';
import { ViewMapper } from '@Views/standard/view';

export class ProductTypeViewMapper extends ViewMapper {
  props: ProductTypeView;

  getPropsToView(): string[] {
    return ['internalName', 'friendlyName'];
  }
}
