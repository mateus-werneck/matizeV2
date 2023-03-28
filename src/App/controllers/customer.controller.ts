import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerView } from '@Interfaces/customer/customer.view';
import { CustomerService } from '@Services/customer/customer.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request
} from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<CustomerView> {
    return await this.customerService.findByEmail(email);
  }

  @Get(':matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<CustomerView> {
    return await this.customerService.findByMatizeId(matizeId);
  }

  @Post()
  async create(@Body() customer: CreateCustomerDto): Promise<void> {
    return await this.customerService.create(customer);
  }

  @Patch()
  async update(@Request() req, @Body() data: UpdateCustomerDto): Promise<void> {
    await this.customerService.update({
      matizeId: req.user.matizeId,
      data
    });
  }
}
