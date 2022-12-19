import { ProductEntity } from "@Entities/product.entity";
import { IRepository } from "@Interfaces/standard/repository";

export interface IProductRepository extends IRepository {
    findOne: (matizeId: string) => Promise<ProductEntity>;
    findAll: () => Promise<ProductEntity[]>;
    create: (data: object) => Promise<void>;
    update: (params: { matizeId: string; data: object }) => Promise<void>;
    remove: (matizeId: string) => Promise<void>;
}
