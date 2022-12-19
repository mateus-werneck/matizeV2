import { ProductView } from "@Interfaces/product/product.view";
import { ViewMapper } from "@Views/standard/view";

export class ProductViewMapper extends ViewMapper {
    props: ProductView
    
    getPropsToView(): string[] {
        return [
            'matizeId',
            'name',
            'internalName',
            'description',
            'typeName',
            'sizeName', 
            'price',
            'quantity',
        ]
    }

}
