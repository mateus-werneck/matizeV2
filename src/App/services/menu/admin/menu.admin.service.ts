import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminView } from '@Interfaces/menu/admin/menu.admin.view';
import { MenuAdminRepository } from '@Repositories/menu/admin/menu.admin.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuAdminService extends Service {
  constructor(private menuAdminRepository: MenuAdminRepository) {
    super();
  }

  async findAll(): Promise<MenuAdminView[]> {
    const menus = await this.menuAdminRepository.findAll();
    console.log(menus)
    return this.treatList(menus) as MenuAdminView[];
  }

  async findByMatizeId(matizeId: string): Promise<MenuAdminView> {
    const menu = await this.menuAdminRepository.findOne(matizeId);
    return this.treatItem(menu) as MenuAdminView;
  }

  async create(menu: CreateMenuAdminDto): Promise<void> {
    return await this.menuAdminRepository.create(menu);
  }

  async update(params: {
    matizeId: string;
    data: UpdateMenuAdminDto;
  }): Promise<void> {
    return await this.menuAdminRepository.update(params);
  }

  async remove(matizeId: string): Promise<void> {
    return await this.menuAdminRepository.remove(matizeId);
  }
}
