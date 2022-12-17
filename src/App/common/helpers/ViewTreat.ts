import { Entity } from '@Entities/standard/entity';

export function treatOne(object) {
  return object.toView();
}

export function treatMany(list: Entity[]) {
  return list.map((object) => object.toView());
}
