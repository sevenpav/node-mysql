SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `todos` (
  `id` int(255) NOT NULL,
  `title` varchar(100) NOT NULL,
  `completed` boolean NOT NULL,
  `created` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO `todos` (`id`, `title`, `completed`, `created`) VALUES
(1, 'Выпить кофе', TRUE, '2019-01-22 19:20:02'),
(2, 'Пописять в штанишки', FALSE, '2018-01-22 20:20:02');

ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `todos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;