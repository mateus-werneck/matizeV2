import { CustomerView } from '@Interfaces/customer/customer.view';
import { CustomerService } from '@Services/customer/customer.service';
import { Controller, Get, Param } from '@nestjs/common';

import { AdminController } from '@Controllers/admin/standard/admin.controller';

@Controller('admin/customers')
export class CustomerAdminController extends AdminController {
  constructor(private readonly customerService: CustomerService) {
    super();
  }

  @Get()
  async findAll(): Promise<CustomerView[]> {
    return this.customerService.findAll();
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<CustomerView> {
    return await this.customerService.findByEmail(email);
  }

  @Get('id/:matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<CustomerView> {
    return await this.customerService.findByMatizeId(matizeId);
  }
}
