import { ProductImageEntity } from '@Entities/product/product.image.entity';
import { ProductSizeEntity } from '@Entities/product/product.size.entity';
import { ProductTypeEntity } from '@Entities/product/product.type.entity';
import { Entity } from '@Entities/standard/entity';
import { IProduct } from '@Interfaces/product/product';
import { ProductImageView } from '@Interfaces/product/product.image.view';
import { ProductSizeView } from '@Interfaces/product/product.size.view';
import { ProductTypeView } from '@Interfaces/product/product.type.view';
import { ProductViewMapper } from '@Views/product/product.view';

export class ProductEntity extends Entity {
  props: IProduct;

  getViewClass(): typeof ProductViewMapper {
    return ProductViewMapper;
  }

  get price(): number {
    return Number(this.props.price);
  }

  get size(): ProductSizeView {
    const productSize = new ProductSizeEntity(this.props.size);
    return productSize.toView() as ProductSizeView;
  }

  get type(): ProductTypeView {
    const productType = new ProductTypeEntity(this.props.type);
    return productType.toView() as ProductTypeView;
  }

  get images(): string[] {
    const images = this.props.images.map((image) => {
      const productImage = new ProductImageEntity(image);
      const imageView = productImage.toView() as ProductImageView;
      return imageView.File.url;
    });
    return images;
  }
}
