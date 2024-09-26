/*
  Warnings:

  - You are about to drop the column `milliliter` on the `DrinkAction` table. All the data in the column will be lost.
  - Added the required column `milliliter` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drink" ADD COLUMN     "milliliter" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DrinkAction" DROP COLUMN "milliliter";
