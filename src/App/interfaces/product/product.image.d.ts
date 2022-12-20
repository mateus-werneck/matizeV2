import { File } from "@prisma/client";

export interface IProductImage {
    matizeId: string;
    fileMatizeId: string;
    productMatizeId: string;

    file: File
    product: Product
}
