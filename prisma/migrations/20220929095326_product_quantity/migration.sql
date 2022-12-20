/*
  Warnings:

  - You are about to alter the column `password_user` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "quantity_product" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password_user" SET DATA TYPE VARCHAR(256);
