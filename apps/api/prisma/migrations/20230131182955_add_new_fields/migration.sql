/*
  Warnings:

  - Added the required column `status` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail_url` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_REVIEW', 'ACTIVE');

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "thumbnail_url" TEXT NOT NULL;
