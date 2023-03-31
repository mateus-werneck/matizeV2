/*
  Warnings:

  - You are about to drop the `MenuAdminPanel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MenuAdminPanel";

-- CreateTable
CREATE TABLE "menu_admin_panel" (
    "id_user" TEXT NOT NULL,
    "name_panel" VARCHAR(256) NOT NULL,
    "route_panel" VARCHAR(256) NOT NULL,
    "icon_panel" VARCHAR(256) NOT NULL,
    "insertdate_panel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedate_panel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_user" TIMESTAMP(3),

    CONSTRAINT "menu_admin_panel_pkey" PRIMARY KEY ("id_user")
);
