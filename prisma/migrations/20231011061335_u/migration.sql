-- CreateTable
CREATE TABLE `tag` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(20) NOT NULL,
    `metaTitle` VARCHAR(20) NOT NULL,
    `slug` VARCHAR(20) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_tag` (
    `postId` BIGINT NOT NULL,
    `tagId` BIGINT NOT NULL,

    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `parentId` BIGINT NOT NULL,
    `title` VARCHAR(20) NOT NULL,
    `metaTile` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post_category` (
    `postId` BIGINT NOT NULL,
    `categoryId` BIGINT NOT NULL,

    PRIMARY KEY (`postId`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post_comment` ADD CONSTRAINT `post_comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_tag` ADD CONSTRAINT `post_tag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_tag` ADD CONSTRAINT `post_tag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
