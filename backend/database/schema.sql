DROP TABLE IF EXISTS `users`;

create table
    `users` (
        `id` int primary key auto_increment not null,
        `nom` VARCHAR(80) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `password` VARCHAR(50) not null
    );

DROP TABLE IF EXISTS `bijoux`;

create table
    `bijoux`(
        `id` int PRIMARY KEY auto_increment NOT NULL,
        `nature` VARCHAR(255) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `prix` VARCHAR(50) NOT NULL,
        `image` VARCHAR(255) NOT NULL,
        ` quantity` INT NOT NULL,
        `categorie` INT NOT NULL,
        CONSTRAINT FK_categorie_id FOREIGN key (`categorie`) REFERENCES `categorie`(`id`)
    );

DROP TABLE IF EXISTS `categorie`;

create table
    `categorie`(
        `id` int PRIMARY KEY auto_increment NOT NULL,
        `nom` VARCHAR(80) NOT NULL,
        `position` INT,
    );

DROPT TABLE IF EXISTS `commandes`;

CREATE TABLE
    `commandes` (
        `userId` INT NOT NULL,
        `bijouxId` INT NOT NULL,
        CONSTRAINT FK_commandes_user_id FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
        CONSTRAINT FK_commandes_bijoux_id FOREIGN KEY (`bijouxId`) REFERENCES `bijoux` (`id`),
        PRIMARY KEY (`userId`, `bijouxId`)
    );