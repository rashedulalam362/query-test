-- CreateTable
CREATE TABLE `post_meta` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `postId` BIGINT NOT NULL,
    `key` VARCHAR(30) NOT NULL,
    `content_text` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post_meta` ADD CONSTRAINT `post_meta_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
