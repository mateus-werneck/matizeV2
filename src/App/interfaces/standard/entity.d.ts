import { View } from './view';

export interface IEntity {
  props: object;
  getViewClass: () => any;
  toView: () => View;
}
