import { Entity } from '@Entities/standard/entity';
import { treatMany, treatOne } from '@Helpers/ViewTreat';

export class Service {
  treatItem(item: object) {
    return treatOne(item);
  }

  treatList(list: Entity[]) {
    return treatMany(list);
  }
}
