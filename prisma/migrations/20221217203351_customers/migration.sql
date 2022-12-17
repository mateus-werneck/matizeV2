/*
  Warnings:

  - You are about to drop the column `fk_id_user_address` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `birthdate_user` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `full_name_user` on the `users` table. All the data in the column will be lost.
  - Added the required column `fk_id_customer_address` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_fk_id_user_address_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "fk_id_user_address",
ADD COLUMN     "fk_id_customer_address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "birthdate_user",
DROP COLUMN "full_name_user";

-- CreateTable
CREATE TABLE "customers" (
    "id_customer" TEXT NOT NULL,
    "document_customer" CHAR(14) NOT NULL,
    "first_name_customer" VARCHAR(256) NOT NULL,
    "last_name_customer" VARCHAR(256) NOT NULL,
    "full_name_customer" VARCHAR(256) NOT NULL,
    "email_customer" VARCHAR(256) NOT NULL,
    "phone_number_customer" CHAR(17) NOT NULL,
    "birthdate_customer" DATE NOT NULL,
    "password_customer" VARCHAR(256) NOT NULL,
    "insertdate_customer" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedate_customer" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_customer" TIMESTAMP(3),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id_customer")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_document_customer_key" ON "customers"("document_customer");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_customer_key" ON "customers"("email_customer");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk_id_customer_address_fkey" FOREIGN KEY ("fk_id_customer_address") REFERENCES "customers"("id_customer") ON DELETE NO ACTION ON UPDATE NO ACTION;
