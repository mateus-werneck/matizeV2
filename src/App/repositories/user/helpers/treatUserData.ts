import { treatStringToDate } from '@Helpers/Date';
import { hasText, treatObject } from '@Helpers/Object';
import { treatPassword } from '@Helpers/Password';
import { UpdateUserDto } from 'src/App/dtos/user/update-user.dto';

export function treatUserUpdateData(userData: UpdateUserDto): object {
  const updateData = {};

  if (hasText(userData.password)) {
    updateData['password'] = treatPassword(userData.password);
  }
  if (hasText(userData.birthDate) && userData.birthDate) {
    updateData['birthDate'] = treatStringToDate(userData.birthDate);
  }

  treatObject(updateData);
  return updateData;
}
