import { View } from '@Interfaces/standard/view';

export interface AddressView extends View {
  document: string;
  city: string;
  state: string;
  street: string;
  number: number;
  district: string;
  additionalInfo: string;
}
