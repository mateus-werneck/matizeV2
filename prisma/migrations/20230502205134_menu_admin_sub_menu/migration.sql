-- AlterTable
ALTER TABLE "menu_admin_panel" ALTER COLUMN "parent_panel" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "menu_admin_panel" ADD CONSTRAINT "menu_admin_panel_parent_panel_fkey" FOREIGN KEY ("parent_panel") REFERENCES "menu_admin_panel"("id_panel") ON DELETE SET NULL ON UPDATE CASCADE;
