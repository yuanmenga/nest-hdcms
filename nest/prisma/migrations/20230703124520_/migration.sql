/*
  Warnings:

  - Added the required column `jianjie` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` ADD COLUMN `jianjie` VARCHAR(191) NOT NULL;
