/* eslint-disable @typescript-eslint/naming-convention */
import { View } from '@Interfaces/standard/view';

export interface CustomerView extends View {
  document: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
}
