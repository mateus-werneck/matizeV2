import { CreateAddressDto } from '@Dtos/address/create-address.dto';
import { UpdateAddressDto } from '@Dtos/address/update-address.dto';
import { AddressView } from '@Interfaces/address/address.view';
import { AddressRepository } from '@Repositories/address/address.repository';
import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService extends Service {
  constructor(private addressRepository: AddressRepository) {
    super();
  }

  async findAll(customerMatizeId?: string): Promise<AddressView[]> {
    const addresses = await this.addressRepository.findAll(customerMatizeId);
    return this.treatList(addresses) as AddressView[];
  }

  async findByMatizeId(matizeId: string): Promise<AddressView> {
    const address = await this.addressRepository.findOne(matizeId);
    return this.treatItem(address) as AddressView;
  }

  async create(params: {
    customerMatizeId: string;
    data: CreateAddressDto;
  }): Promise<void> {
    await this.addressRepository.create(params);
  }

  async update(params: {
    matizeId: string;
    customerMatizeId: string;
    data: UpdateAddressDto;
  }): Promise<void> {
    await this.addressRepository.update(params);
  }

  async remove(matizeId: string): Promise<void> {
    await this.addressRepository.remove(matizeId);
  }
}
