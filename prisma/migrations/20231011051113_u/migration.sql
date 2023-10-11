/*
  Warnings:

  - You are about to alter the column `authorId` on the `post` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `authorId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `post_comment` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `postId` BIGINT NOT NULL,
    `parentId` BIGINT NOT NULL,
    `title` VARCHAR(20) NOT NULL,
    `published` TINYTEXT NOT NULL,
    `context_text` VARCHAR(20) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
