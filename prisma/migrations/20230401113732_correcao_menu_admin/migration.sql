/*
  Warnings:

  - The primary key for the `menu_admin_panel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_user` on the `menu_admin_panel` table. All the data in the column will be lost.
  - The required column `id_panel` was added to the `menu_admin_panel` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "menu_admin_panel" DROP CONSTRAINT "menu_admin_panel_pkey",
DROP COLUMN "id_user",
ADD COLUMN     "id_panel" TEXT NOT NULL,
ADD CONSTRAINT "menu_admin_panel_pkey" PRIMARY KEY ("id_panel");
