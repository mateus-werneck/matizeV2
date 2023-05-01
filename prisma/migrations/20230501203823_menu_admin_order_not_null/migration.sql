/*
  Warnings:

  - Made the column `order_panel` on table `menu_admin_panel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "menu_admin_panel" ALTER COLUMN "order_panel" SET NOT NULL;
