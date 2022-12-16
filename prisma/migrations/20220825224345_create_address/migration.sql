/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "matizeId" TEXT NOT NULL,
    "document" CHAR(14) NOT NULL,
    "firstName" VARCHAR(256) NOT NULL,
    "lastName" VARCHAR(256) NOT NULL,
    "fullName" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "phoneNumber" CHAR(17) NOT NULL,
    "birthDate" DATE NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("matizeId")
);

-- CreateTable
CREATE TABLE "addresses" (
    "matizeId" TEXT NOT NULL,
    "document" CHAR(9) NOT NULL,
    "street" VARCHAR(256) NOT NULL,
    "number" INTEGER NOT NULL,
    "district" VARCHAR(256) NOT NULL,
    "userMatizeId" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("matizeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userMatizeId_fkey" FOREIGN KEY ("userMatizeId") REFERENCES "users"("matizeId") ON DELETE NO ACTION ON UPDATE NO ACTION;
