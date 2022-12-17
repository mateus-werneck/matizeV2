import { EntityProps } from '@Interfaces/standard/entity';
import { ViewMapper } from '@Views/standard/view';

export class Entity implements EntityProps {
    props: object;

  constructor(props: any) {
    this.props = props;
  }

  getViewClass(): ViewMapper {
    throw Error('Function not implemented')
  }

  toView(): object {
    const viewClass = this.getViewClass();
    viewClass.setData(this.props)
    return viewClass.getData()
  }
}
