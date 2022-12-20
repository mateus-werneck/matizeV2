import { FileView } from '@Interfaces/file/file.view';
import { IProductImage } from '@Interfaces/product/product.image';
import { ProductImageViewMapper } from '@Views/product/product.image.view';
import { FileEntity } from './file.entity';
import { Entity } from './standard/entity';

export class ProductImageEntity extends Entity {
  props: IProductImage;

  getViewClass(): typeof ProductImageViewMapper {
    return ProductImageViewMapper;
  }

  get file(): FileView {
    const fileEntity = new FileEntity(this.props.file);
    return fileEntity.toView() as FileView;
  }
}
