/*
  Warnings:

  - The primary key for the `addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `district` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `matizeId` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `userMatizeId` on the `addresses` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `birthDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `document` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `matizeId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email_user]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `district_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_id_user_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - The required column `id_address` was added to the `addresses` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `number_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - The required column `id_user` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `last_name_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_user` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number_user` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_userMatizeId_fkey";

-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_pkey",
DROP COLUMN "district",
DROP COLUMN "document",
DROP COLUMN "matizeId",
DROP COLUMN "number",
DROP COLUMN "street",
DROP COLUMN "userMatizeId",
ADD COLUMN     "district_address" VARCHAR(256) NOT NULL,
ADD COLUMN     "document_address" CHAR(9) NOT NULL,
ADD COLUMN     "fk_id_user_address" TEXT NOT NULL,
ADD COLUMN     "id_address" TEXT NOT NULL,
ADD COLUMN     "number_address" INTEGER NOT NULL,
ADD COLUMN     "street_address" VARCHAR(256) NOT NULL,
ADD CONSTRAINT "addresses_pkey" PRIMARY KEY ("id_address");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "birthDate",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "document",
DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "fullName",
DROP COLUMN "lastName",
DROP COLUMN "matizeId",
DROP COLUMN "password",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "birthdate_user" DATE NOT NULL,
ADD COLUMN     "deleted_user" TIMESTAMP(3),
ADD COLUMN     "document_user" CHAR(14) NOT NULL,
ADD COLUMN     "email_user" VARCHAR(256) NOT NULL,
ADD COLUMN     "first_name_user" VARCHAR(256) NOT NULL,
ADD COLUMN     "full_name_user" VARCHAR(256) NOT NULL,
ADD COLUMN     "id_user" TEXT NOT NULL,
ADD COLUMN     "insertdate_user" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_name_user" VARCHAR(256) NOT NULL,
ADD COLUMN     "password_user" TEXT NOT NULL,
ADD COLUMN     "phone_number_user" CHAR(17) NOT NULL,
ADD COLUMN     "updatedate_user" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_user_key" ON "users"("email_user");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk_id_user_address_fkey" FOREIGN KEY ("fk_id_user_address") REFERENCES "users"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION;
