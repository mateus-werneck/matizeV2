import { ViewMapper } from '@Views/standard/view';
import { View } from './view';

export interface IEntity {
  props: object;
  getViewClass: () => ViewMapper;
  toView: () => View;
}
