import { hasText, treatObject } from '@Helpers/Object';
import { treatPassword } from '@Helpers/Password';
import { UpdateUserDto } from 'src/App/dtos/user/update-user.dto';

export function treatUserUpdateData(userData: UpdateUserDto): object {
  const updateData = {};

  if (hasText(userData.password)) {
    updateData['password'] = treatPassword(userData.password);
  }

  treatObject(updateData);
  return updateData;
}
