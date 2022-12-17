import { ViewProps } from '@Interfaces/standard/view';

export interface UserViewProps extends ViewProps {
  matizeId: string;
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
