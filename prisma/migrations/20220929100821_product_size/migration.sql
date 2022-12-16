-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_size_product_fkey";

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "size_product" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_size_product_fkey" FOREIGN KEY ("size_product") REFERENCES "product_sizes"("internalname_productsize") ON DELETE SET NULL ON UPDATE CASCADE;
