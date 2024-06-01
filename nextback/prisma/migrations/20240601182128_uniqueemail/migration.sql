/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Usernb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usernb_password_key" ON "Usernb"("password");
