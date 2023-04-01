/*
  Warnings:

  - You are about to drop the column `deleted_user` on the `menu_admin_panel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menu_admin_panel" DROP COLUMN "deleted_user",
ADD COLUMN     "deleted_panel" TIMESTAMP(3),
ADD COLUMN     "parent_panel" VARCHAR(256);
