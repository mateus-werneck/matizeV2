import { Service } from '@Services/standard/service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService extends Service {
    constructor(private addressRepository) {
        super()
    }
}
