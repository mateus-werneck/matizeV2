-- CreateTable
CREATE TABLE "MenuAdminPanel" (
    "id_user" TEXT NOT NULL,
    "name_panel" VARCHAR(256) NOT NULL,
    "route_panel" VARCHAR(256) NOT NULL,
    "icon_panel" VARCHAR(256) NOT NULL,
    "insertdate_panel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedate_panel" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_user" TIMESTAMP(3),

    CONSTRAINT "MenuAdminPanel_pkey" PRIMARY KEY ("id_user")
);
