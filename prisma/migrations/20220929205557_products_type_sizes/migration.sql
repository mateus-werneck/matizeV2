/*
  Warnings:

  - You are about to drop the column `friendly_name_productsize` on the `product_sizes` table. All the data in the column will be lost.
  - You are about to drop the column `internalname_productsize` on the `product_sizes` table. All the data in the column will be lost.
  - You are about to drop the column `friendly_name_productsize` on the `product_types` table. All the data in the column will be lost.
  - You are about to drop the column `internalname_productsize` on the `product_types` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[internalname_size]` on the table `product_sizes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[friendly_name_size]` on the table `product_sizes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[internalname_type]` on the table `product_types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[friendly_name_type]` on the table `product_types` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `friendly_name_size` to the `product_sizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internalname_size` to the `product_sizes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendly_name_type` to the `product_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `internalname_type` to the `product_types` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_size_product_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_type_product_fkey";

-- DropIndex
DROP INDEX "product_sizes_friendly_name_productsize_key";

-- DropIndex
DROP INDEX "product_sizes_internalname_productsize_key";

-- DropIndex
DROP INDEX "product_types_friendly_name_productsize_key";

-- DropIndex
DROP INDEX "product_types_internalname_productsize_key";

-- AlterTable
ALTER TABLE "product_sizes" DROP COLUMN "friendly_name_productsize",
DROP COLUMN "internalname_productsize",
ADD COLUMN     "friendly_name_size" CHAR(5) NOT NULL,
ADD COLUMN     "internalname_size" VARCHAR(25) NOT NULL;

-- AlterTable
ALTER TABLE "product_types" DROP COLUMN "friendly_name_productsize",
DROP COLUMN "internalname_productsize",
ADD COLUMN     "friendly_name_type" CHAR(5) NOT NULL,
ADD COLUMN     "internalname_type" VARCHAR(25) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_sizes_internalname_size_key" ON "product_sizes"("internalname_size");

-- CreateIndex
CREATE UNIQUE INDEX "product_sizes_friendly_name_size_key" ON "product_sizes"("friendly_name_size");

-- CreateIndex
CREATE UNIQUE INDEX "product_types_internalname_type_key" ON "product_types"("internalname_type");

-- CreateIndex
CREATE UNIQUE INDEX "product_types_friendly_name_type_key" ON "product_types"("friendly_name_type");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_size_product_fkey" FOREIGN KEY ("size_product") REFERENCES "product_sizes"("internalname_size") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_type_product_fkey" FOREIGN KEY ("type_product") REFERENCES "product_types"("internalname_type") ON DELETE RESTRICT ON UPDATE CASCADE;
