import { CreateAddressDto } from '@Dtos/address/create-address.dto';
import { UpdateAddressDto } from '@Dtos/address/update-address.dto';
import { AddressView } from '@Interfaces/address/address.view';
import { AddressService } from '@Services/address/address.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request
} from '@nestjs/common';

@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async findAll(@Request() req): Promise<AddressView[]> {
    const customerMatizeId = req.user.matizeId;
    return this.addressService.findAll(customerMatizeId);
  }

  @Get(':matizeId')
  async findOne(@Param('matizeId') matizeId: string): Promise<AddressView> {
    return await this.addressService.findByMatizeId(matizeId);
  }

  @Post()
  async create(@Request() req, @Body() data: CreateAddressDto): Promise<void> {
    const customerMatizeId = req.user.matizeId;
    return await this.addressService.create({ customerMatizeId, data });
  }

  @Patch(':matizeId')
  async update(
    @Param('matizeId') matizeId: string,
    @Body() data: UpdateAddressDto
  ): Promise<void> {
    await this.addressService.update({
      matizeId,
      data
    });
  }
}
