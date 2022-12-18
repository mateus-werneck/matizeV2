import { UpdateCustomerDto } from '@Dtos/customer/update-customer.dto';
import { treatObject } from '@Helpers/Object';

export function treatCustomerUpdateData(
  customerData: UpdateCustomerDto
): object {
  const updateData = {
    phoneNumber: customerData.getPhoneNumber(),
    birthDate: customerData.getBirthDate(),
    password: customerData.getPassword()
  };
  treatObject(updateData);
  return updateData;
}
