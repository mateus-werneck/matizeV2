import { Entity } from '@Entities/standard/entity';
import { isValidObject } from '@Helpers/Object';
import { View } from '@Interfaces/standard/view';

export abstract class ViewMapper {
  props: View;

  abstract getPropsToView(): string[];

  constructor() {
    this.props = {} as View;
  }

  setData(entity: Entity) {
    const props = this.getPropsToView();
    props.forEach((prop) => this.setViewProp(prop, entity));
  }

  private hasCustomData(prop: string) {
    return prop.search('get') != -1;
  }

  private setViewProp(prop: string, entity: Entity) {
    if (this.hasCustomData(prop)) {
      return this.setCustomViewProp(prop, entity);
    }
    this.props[prop] = entity.props[prop];
  }

  private setCustomViewProp(prop: string, entity: Entity) {
    const customProp = prop.replace('get', '');
    this.props[customProp] = entity[customProp.toLowerCase()];
  }

  getData(): View {
    return this.props as View;
  }

  hasData(): boolean {
    return isValidObject(this.props);
  }
}
