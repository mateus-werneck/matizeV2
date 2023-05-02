-- DropForeignKey
ALTER TABLE "menu_admin_panel" DROP CONSTRAINT "menu_admin_panel_parent_panel_fkey";

-- AlterTable
ALTER TABLE "menu_admin_panel" ALTER COLUMN "icon_panel" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "menu_admin_panel" ADD CONSTRAINT "menu_admin_panel_parent_panel_fkey" FOREIGN KEY ("parent_panel") REFERENCES "menu_admin_panel"("id_panel") ON DELETE CASCADE ON UPDATE CASCADE;
