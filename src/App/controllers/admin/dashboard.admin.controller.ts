import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { CreateMenuAdminDto } from '@Dtos/menu/admin/create-menu-admin.dto';
import { UpdateMenuAdminDto } from '@Dtos/menu/admin/update-menu-admin.dto';
import { MenuAdminView } from '@Interfaces/menu/admin/menu.admin.view';
import { MenuAdminService } from '@Services/menu/admin/menu.admin.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common';

@Controller('admin-dashboard')
export class AdminDashboardController extends AdminController {
  constructor(private adminDashboardService: MenuAdminService) {
    super();
  }

  @Get()
  async findAll(): Promise<MenuAdminView[]> {
    return this.adminDashboardService.findAll();
  }

  @Get(':matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<MenuAdminView> {
    return await this.adminDashboardService.findByMatizeId(matizeId);
  }

  @Post()
  async create(@Body() data: CreateMenuAdminDto): Promise<void> {
    return await this.adminDashboardService.create(data);
  }

  @Patch(':matizeId')
  async update(
    @Param('matizeId') matizeId: string,
    @Body() data: UpdateMenuAdminDto
  ): Promise<void> {
    await this.adminDashboardService.update({
      matizeId,
      data
    });
  }

  @Delete(':matizeId')
  async remove(@Param('matizeId') matizeId: string): Promise<void> {
    await this.adminDashboardService.remove(matizeId);
  }
}
