/*
  Warnings:

  - A unique constraint covering the columns `[phone_number_customer]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone_number_user]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_number_customer_key" ON "customers"("phone_number_customer");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_number_user_key" ON "users"("phone_number_user");
