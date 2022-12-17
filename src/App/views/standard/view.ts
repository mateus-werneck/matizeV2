import { hasText } from '@Helpers/Object';
import { ViewProps } from '@Interfaces/standard/view';

export class View {
  props: ViewProps;

  constructor(entity: object | undefined = undefined) {
    if(entity) {
      this.setData(entity)
    }
  }

  public set matizeId(matizeId: string) {
    this.props.matizeId = matizeId
  }

  public get matizeId(): string {
    return this.props.matizeId;
  }

  setData(entity: object): void {
    this.props = entity as ViewProps
  }

  getData(): ViewProps {
    return this.props
  }
  
  hasMatizeId(): boolean {
    return hasText(this.props.matizeId);
  }

}
