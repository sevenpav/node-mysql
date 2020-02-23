SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `todos` (
  `id` int(255) NOT NULL,
  `title` varchar(100) NOT NULL,
  `done` boolean NOT NULL,
  `createdAt` TIMESTAMP NOT NULL,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW()
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO `todos` (`id`, `title`, `done`) VALUES
(1, 'Выпить кофе', TRUE),
(2, 'Пописять в штанишки', FALSE);

ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `todos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;