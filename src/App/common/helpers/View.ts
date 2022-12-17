import { Entity } from "@Entities/standard/entity";

export function treatOne(object: Entity) {
  return object.toView();
}

export function treatMany(list: Entity[]) {
  return list.map((object) => object.toView());
}
