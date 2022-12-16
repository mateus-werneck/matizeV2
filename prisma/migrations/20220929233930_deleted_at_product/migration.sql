/*
  Warnings:

  - You are about to drop the column `deleted_address` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "deleted_address",
ADD COLUMN     "deleted_product" TIMESTAMP(3);
