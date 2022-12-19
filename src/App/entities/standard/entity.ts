import { hasText } from '@Helpers/Object';
import { IEntity } from '@Interfaces/standard/entity';
import { View } from '@Interfaces/standard/view';

export abstract class Entity implements IEntity {
  props: object;

  abstract getViewClass();

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
    const viewClassName = this.getViewClass();
    const viewClass = new viewClassName(this)
    return viewClass.getData();
  }
}
