import { FileView } from '@Interfaces/file/file.view';
import { ViewMapper } from '@Views/standard/view';

export class FileViewMapper extends ViewMapper {
  props: FileView;

  getPropsToView(): string[] {
    return [
      'matizeId',
      'name',
      'mimeType',
      'get_url'
    ];
  }
}
