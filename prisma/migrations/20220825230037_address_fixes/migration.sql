/*
  Warnings:

  - Added the required column `additional_info_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city_address` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_address` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "additional_info_address" VARCHAR(256) NOT NULL,
ADD COLUMN     "city_address" VARCHAR(256) NOT NULL,
ADD COLUMN     "deleted_address" TIMESTAMP(3),
ADD COLUMN     "insertdate_address" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "state_address" CHAR(2) NOT NULL,
ADD COLUMN     "updatedate_address" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
