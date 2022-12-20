-- CreateTable
CREATE TABLE "products" (
    "id_product" TEXT NOT NULL,
    "name_product" VARCHAR(256) NOT NULL,
    "internalname_product" VARCHAR(256),
    "desc_product" VARCHAR(256) NOT NULL,
    "type_product" VARCHAR(25) NOT NULL,
    "size_product" VARCHAR(25) NOT NULL,
    "price_product" DECIMAL(10,2) NOT NULL,
    "quantity_product" INTEGER NOT NULL,
    "insertdate_product" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedate_product" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_address" TIMESTAMP(3),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "product_sizes" (
    "internalname_productsize" VARCHAR(25) NOT NULL,
    "friendly_name_productsize" CHAR(5) NOT NULL
);

-- CreateTable
CREATE TABLE "product_images" (
    "id_image" TEXT NOT NULL,
    "fk_id_file_image" TEXT NOT NULL,
    "fk_id_product_image" TEXT NOT NULL,

    CONSTRAINT "product_images_pkey" PRIMARY KEY ("id_image")
);

-- CreateTable
CREATE TABLE "files" (
    "id_file" TEXT NOT NULL,
    "type_file" VARCHAR(25) NOT NULL,
    "mime_type_file" VARCHAR(25) NOT NULL,
    "name_file" VARCHAR(256) NOT NULL,
    "insertdate_file" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedate_file" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id_file")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_sizes_internalname_productsize_key" ON "product_sizes"("internalname_productsize");

-- CreateIndex
CREATE UNIQUE INDEX "product_sizes_friendly_name_productsize_key" ON "product_sizes"("friendly_name_productsize");

-- CreateIndex
CREATE UNIQUE INDEX "product_images_fk_id_file_image_key" ON "product_images"("fk_id_file_image");

-- CreateIndex
CREATE UNIQUE INDEX "product_images_fk_id_product_image_key" ON "product_images"("fk_id_product_image");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_size_product_fkey" FOREIGN KEY ("size_product") REFERENCES "product_sizes"("internalname_productsize") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_fk_id_file_image_fkey" FOREIGN KEY ("fk_id_file_image") REFERENCES "files"("id_file") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_fk_id_product_image_fkey" FOREIGN KEY ("fk_id_product_image") REFERENCES "products"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;
