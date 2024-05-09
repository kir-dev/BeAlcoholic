/*
  Warnings:

  - You are about to drop the column `userId` on the `DrinkAction` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Event` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DrinkAction" DROP CONSTRAINT "DrinkAction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_ownerId_fkey";

-- AlterTable
ALTER TABLE "DrinkAction" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "ownerId";
