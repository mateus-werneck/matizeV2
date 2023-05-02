import { Entity } from '@Entities/standard/entity';
import { treatMany } from '@Helpers/ViewTreat';
import { IMenuAdmin } from '@Interfaces/menu/admin/menu.admin';
import { MenuAdminView } from '@Interfaces/menu/admin/menu.admin.view';
import { MenuAdminViewMapper } from '@Views/menu/admin/menu.admin.view';

export class MenuAdminEntity extends Entity {
  props: IMenuAdmin;

  get Children(): MenuAdminView[] {
    if (!this.props.children) {
      return [] as MenuAdminView[];
    }
    const children = this.props.children.map(
      (child) => new MenuAdminEntity(child)
    );
    return treatMany(children) as MenuAdminView[];
  }

  getViewClass(): typeof MenuAdminViewMapper {
    return MenuAdminViewMapper;
  }
}
