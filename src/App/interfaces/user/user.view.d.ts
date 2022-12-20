/* eslint-disable @typescript-eslint/naming-convention */
import { View } from '@Interfaces/standard/view';

export interface UserView extends View {
  document: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
