import { Entity } from '@Entities/standard/entity';

export function treatOne(item: object) {
  if (item instanceof Entity) {
    return item.toView();
  }
}

export function treatMany(list: Entity[]) {
  return list.map((object) => object.toView());
}
