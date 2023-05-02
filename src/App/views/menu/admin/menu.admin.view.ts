import { MenuAdminView } from '@Interfaces/menu/admin/menu.admin.view';
import { ViewMapper } from '@Views/standard/view';

export class MenuAdminViewMapper extends ViewMapper {
  props: MenuAdminView;

  getPropsToView(): string[] {
    return ['matizeId', 'parentId', 'name', 'route', 'icon', 'orderBy', "getChildren"];
  }
}
