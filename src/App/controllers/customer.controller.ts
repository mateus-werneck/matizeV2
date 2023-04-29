import { Public } from '@Decorators/public.decorator';
import { CreateCustomerDto } from '@Dtos/customer/create-customer.dto';
import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { CustomerService } from '@Services/customer/customer.service';
import {
  Body,
  Controller,
  Patch,
  Post,
  Request
} from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Public()
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
