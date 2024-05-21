/*
  Warnings:

  - You are about to drop the `FavouriteDrink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavouriteDrink" DROP CONSTRAINT "FavouriteDrink_drinkId_fkey";

-- DropForeignKey
ALTER TABLE "FavouriteDrink" DROP CONSTRAINT "FavouriteDrink_userId_fkey";

-- DropTable
DROP TABLE "FavouriteDrink";

-- CreateTable
CREATE TABLE "_DrinkToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DrinkToUser_AB_unique" ON "_DrinkToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DrinkToUser_B_index" ON "_DrinkToUser"("B");

-- AddForeignKey
ALTER TABLE "_DrinkToUser" ADD CONSTRAINT "_DrinkToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Drink"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DrinkToUser" ADD CONSTRAINT "_DrinkToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("authSchId") ON DELETE CASCADE ON UPDATE CASCADE;
