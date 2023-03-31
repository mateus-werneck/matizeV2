import { Entity } from '@Entities/standard/entity';
import { IMenuAdmin } from '@Interfaces/menu/admin/menu.admin';
import { MenuAdminViewMapper } from '@Views/menu/menu.admin.view';

export class MenuAdminEntity extends Entity {
  props: IMenuAdmin;

  getViewClass(): typeof MenuAdminViewMapper {
    return MenuAdminViewMapper;
  }
}
