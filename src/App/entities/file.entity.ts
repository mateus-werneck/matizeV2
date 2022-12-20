import { Entity } from '@Entities/standard/entity';
import { IFile } from '@Interfaces/file/file';
import { FileViewMapper } from '@Views/file/file.view';

export class FileEntity extends Entity {
  props: IFile;

  getViewClass(): typeof FileViewMapper {
    return FileViewMapper;
  }

  get url(): string {
    const systemUrl = process.env.SYSTEM_URL as string;
    return `${systemUrl}files/images/${this.props.matizeId}`;
  }
}
