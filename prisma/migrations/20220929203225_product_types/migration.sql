-- CreateTable
CREATE TABLE "product_types" (
    "internalname_productsize" VARCHAR(25) NOT NULL,
    "friendly_name_productsize" CHAR(5) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "product_types_internalname_productsize_key" ON "product_types"("internalname_productsize");

-- CreateIndex
CREATE UNIQUE INDEX "product_types_friendly_name_productsize_key" ON "product_types"("friendly_name_productsize");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_type_product_fkey" FOREIGN KEY ("type_product") REFERENCES "product_types"("internalname_productsize") ON DELETE RESTRICT ON UPDATE CASCADE;
