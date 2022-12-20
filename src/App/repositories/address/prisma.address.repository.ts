import { CreateAddressDto } from '@Dtos/address/create-address.dto';
import { UpdateAddressDto } from '@Dtos/address/update-address.dto';
import { AddressEntity } from '@Entities/address.entity';
import { isValidObject, treatObject } from '@Helpers/Object';
import { PrismaRepository } from '@Repositories/standard/prisma.repository';
import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { AddressRepository } from './address.repository';

@Injectable()
export class PrismaAddressRepository
  extends PrismaRepository
  implements AddressRepository
{
  getRepository(): string {
    return 'address';
  }

  getEntity(): typeof AddressEntity {
    return AddressEntity;
  }

  async findOne(matizeId: string): Promise<AddressEntity> {
    const address = this.prisma.address.findFirstOrThrow({
      where: { matizeId }
    });
    return this.treatEntity(address);
  }

  async findAll(customerMatizeId: string): Promise<AddressEntity[]> {
    const addresses = await this.prisma.address.findMany({
      where: { customerMatizeId }
    });
    return this.treatList(addresses);
  }

  async create(params: {
    customerMatizeId: string;
    data: CreateAddressDto;
  }): Promise<void> {
    const { customerMatizeId, data } = params;

    const createData = {
      ...data,
      customerMatizeId
    };

    treatObject(createData);

    await this.prisma.address.create({
      data: createData as Address
    });
  }

  async update(params: {
    matizeId: string;
    customerMatizeId: string;
    data: UpdateAddressDto;
  }): Promise<void> {
    const { matizeId, customerMatizeId, data } = params;
    
    treatObject(data);
    
    if (!isValidObject(data)) {
      return;
    }

    await this.prisma.address.updateMany({
      where: { matizeId, customerMatizeId },
      data
    });
  }

  async remove(matizeId: string): Promise<void> {
    await this.softDelete(matizeId);
  }
}
