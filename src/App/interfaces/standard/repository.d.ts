import { Entity } from '@Entities/standard/entity';

export interface Repository {
  findOne: (matizeId: string) => Promise<Entity | null>;
  findAll: () => Promise<Entity[]>;
  create: (data: object) => Promise<void>;
  update: (params: { matizeId: string; data: object }) => Promise<void>;
  remove: (matizeId: string) => Promise<void>;
}
