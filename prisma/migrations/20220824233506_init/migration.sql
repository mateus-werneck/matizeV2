/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email_user]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "email_user" TEXT NOT NULL,
ADD COLUMN     "id_user" SERIAL NOT NULL,
ADD COLUMN     "name_user" TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_user_key" ON "User"("email_user");
