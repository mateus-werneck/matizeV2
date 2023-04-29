import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { AddressView } from '@Interfaces/address/address.view';
import { AddressService } from '@Services/address/address.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/admin/addresses')
export class AddressAdminController extends AdminController {
  constructor(private readonly addressService: AddressService) {
    super();
  }

  @Get()
  async findAll(): Promise<AddressView[]> {
    return await this.addressService.findAllRegardless();
  }

  @Get(':matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<AddressView> {
    return await this.addressService.findByMatizeId(matizeId);
  }
}
