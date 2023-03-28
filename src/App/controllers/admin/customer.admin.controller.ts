import { CustomerView } from '@Interfaces/customer/customer.view';
import { CustomerService } from '@Services/customer/customer.service';
import {
  Controller,
  Get
} from '@nestjs/common';

import { AdminController } from '@Controllers/admin/standard/admin.controller';

@Controller('customers')
export class CustomerAdminController extends AdminController {
  constructor(private readonly customerService: CustomerService) {
    super()
  }

  @Get()
  async findAll(): Promise<CustomerView[]> {
    return this.customerService.findAll();
  }

}
