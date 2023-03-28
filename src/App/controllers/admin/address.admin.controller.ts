import { AdminController } from '@Controllers/admin/standard/admin.controller';
import { AddressView } from '@Interfaces/address/address.view';
import { AddressService } from '@Services/address/address.service';
import { Controller, Get, Param, Request } from '@nestjs/common';

@Controller('addresses')
export class AddressAdminController extends AdminController {
  constructor(private readonly addressService: AddressService) {
    super();
  }

  @Get()
  async findAll(@Request() req): Promise<AddressView[]> {
    const customerMatizeId = req.user.matizeId;
    return this.addressService.findAll(customerMatizeId);
  }

  @Get(':matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<AddressView> {
    return await this.addressService.findByMatizeId(matizeId);
  }
}
