-- CreateTable
CREATE TABLE "Usernb" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usernb_pkey" PRIMARY KEY ("id")
);
