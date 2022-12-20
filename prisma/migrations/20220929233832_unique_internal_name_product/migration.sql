/*
  Warnings:

  - A unique constraint covering the columns `[internalname_product]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_internalname_product_key" ON "products"("internalname_product");
