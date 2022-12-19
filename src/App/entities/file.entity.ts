import { Entity } from '@Entities/standard/entity';
import { IFile } from '@Interfaces/file/file';
import { FileViewMapper } from '@Views/file/file.view';

export class FileEntity extends Entity {
  props: IFile;

  getViewClass(): typeof FileViewMapper {
    return FileViewMapper;
  }

  get url(): string {
    const storage = this.getStoragePath()
    const fileName = this.props.name
    return `${storage}/${fileName}`
  }

  private getStoragePath(): string {
    if (this.isImage()) {
      return String(process.env.IMAGE_PATH)
    }
    return String(process.env.STORAGE_PATH)
  }

  private isImage(): boolean {
    return this.props.mimeType.search('image') != -1
  }
}
