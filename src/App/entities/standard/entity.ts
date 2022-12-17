import { hasText } from '@Helpers/Object';
import { IEntity } from '@Interfaces/standard/entity';
import { View } from '@Interfaces/standard/view';
import { ViewMapper } from '@Views/standard/view';

export abstract class Entity implements IEntity {
  props: object;

  abstract getViewClass(): ViewMapper;

  constructor(props: object) {
    this.props = props;
  }

  getData(): object {
    return this.props;
  }

  get matizeId(): string {
    return this.props['matizeId'];
  }

  hasMatizeId(): boolean {
    return hasText(this.props['matizeId']);
  }

  toView(): View {
    const viewClass = this.getViewClass();
    viewClass.setData(this.props);
    return viewClass.getData();
  }
}
