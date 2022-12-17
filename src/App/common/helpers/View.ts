import { Entity } from "@Entities/standard/entity";

export function treatItem(object: Entity) {
  return object.toView();
}

export function treatList(list: Entity[]) {
  return list.map((object) => object.toView());
}
