import { EntityProps } from '@Interfaces/standard/entity';
import { ViewProps } from '@Interfaces/standard/view';
import { View } from '@Views/standard/view';

export class Entity implements EntityProps {
    props: object;

  constructor(props: any) {
    this.props = props;
  }

  getViewClass(): View {
    throw Error('Function not implemented')
  }

  toView(): ViewProps {
    const viewClass = this.getViewClass();
    viewClass.setData(this.props)
    return viewClass.getData();
  }
}
