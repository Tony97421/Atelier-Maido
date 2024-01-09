DROP TABLE IF EXISTS `users`;

CREATE TABLE
    `users` (
        `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        `nom` VARCHAR(80) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `password` VARCHAR(50) NOT NULL
    );

    DROP TABLE IF EXISTS `categorie`;

CREATE TABLE
    `categorie` (
        `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        `nom` VARCHAR(80) NOT NULL,
        `position` INT
    );

DROP TABLE IF EXISTS `bijoux`;

CREATE TABLE
    `bijoux` (
        `id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        `nature` VARCHAR(255) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `prix` VARCHAR(50) NOT NULL,
        `image` VARCHAR(255) NOT NULL,
        `quantity` INT NOT NULL,
        `categorie` INT NOT NULL,
        CONSTRAINT FK_categorie_id FOREIGN KEY (`categorie`) REFERENCES `categorie`(`id`)
    );

DROP TABLE IF EXISTS `commandes`;

CREATE TABLE
    `commandes` (
        `userId` INT NOT NULL,
        `bijouxId` INT NOT NULL,
        CONSTRAINT FK_commandes_user_id FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
        CONSTRAINT FK_commandes_bijoux_id FOREIGN KEY (`bijouxId`) REFERENCES `bijoux` (`id`),
        PRIMARY KEY (`userId`, `bijouxId`)
    );