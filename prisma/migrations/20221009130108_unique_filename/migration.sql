/*
  Warnings:

  - A unique constraint covering the columns `[name_file]` on the table `files` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "files_name_file_key" ON "files"("name_file");
