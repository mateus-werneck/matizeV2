import { Product } from "@prisma/client";

export interface IProductType {
    internalName: string;
    friendlyName: string;
    product: Product[];
}
