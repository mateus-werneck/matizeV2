import { hasText } from '@Helpers/Object';
import { View } from '@Interfaces/standard/view';

export abstract class ViewMapper {
  props: View;

  abstract getPropsToView(): string[];

  constructor() {
    this.props = {} as View;
  }

  setData(entity: object) {
    const props = this.getPropsToView();
    for (const prop of props) {
      this.props[prop] = entity[prop];
    }
  }

  getData(): View {
    return this.props;
  }

  hasData(): boolean {
    return Object.keys(this.props).length > 0;
  }
}
