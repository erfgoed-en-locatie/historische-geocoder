-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 19 feb 2015 om 11:37
-- Serverversie: 5.5.38
-- PHP-versie: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `erfgoedenlocatie`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `provincies`
--

CREATE TABLE `provincies` (
`id` int(11) NOT NULL,
  `naam` varchar(100) NOT NULL,
  `afkorting` varchar(10) NOT NULL,
  `tgn` varchar(255) NOT NULL,
  `geonames` varchar(255) NOT NULL,
  `gemeentegeschiedenis` varchar(255) NOT NULL,
  `bag` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `provincies`
--

INSERT INTO `provincies` (`id`, `naam`, `afkorting`, `tgn`, `geonames`, `gemeentegeschiedenis`, `bag`) VALUES
(1, 'Noord-Holland', 'NH', 'http://vocab.getty.edu/tgn/7006951', 'http://www.geonames.org/2749879', 'http://www.gemeentegeschiedenis.nl/provincie/Noord-Holland', ''),
(2, 'Zuid-Holland', 'ZH', 'http://vocab.getty.edu/tgn/7003632', 'http://www.geonames.org/2743698', 'http://www.gemeentegeschiedenis.nl/provincie/Zuid-Holland', ''),
(3, 'Friesland', 'Fr', 'http://vocab.getty.edu/tgn/7003616', 'http://www.geonames.org/2755812', 'http://www.gemeentegeschiedenis.nl/provincie/Friesland', ''),
(4, 'Groningen', 'Gr', 'http://vocab.getty.edu/tgn/7003613', 'http://www.geonames.org/2755249', 'http://www.gemeentegeschiedenis.nl/provincie/Groningen', ''),
(5, 'Drenthe', 'Dr', 'http://vocab.getty.edu/tgn/7003614', 'http://www.geonames.org/2756631', 'http://www.gemeentegeschiedenis.nl/provincie/Drenthe', ''),
(6, 'Overijssel', 'Ov', 'http://vocab.getty.edu/tgn/7003626', 'http://www.geonames.org/2748838', 'http://www.gemeentegeschiedenis.nl/provincie/Overijssel', ''),
(7, 'Gelderland', 'Ge', 'http://vocab.getty.edu/tgn/7003619', 'http://www.geonames.org/2755634', 'http://www.gemeentegeschiedenis.nl/provincie/Gelderland', ''),
(8, 'Flevoland', 'Fl', 'http://vocab.getty.edu/tgn/7003615', 'http://www.geonames.org/3319179', 'http://www.gemeentegeschiedenis.nl/provincie/Flevoland', ''),
(9, 'Utrecht', 'Ut', 'http://vocab.getty.edu/tgn/7003627', 'http://www.geonames.org/2745909', 'http://www.gemeentegeschiedenis.nl/provincie/Utrecht', ''),
(10, 'Noord-Brabant', 'NB', 'http://vocab.getty.edu/tgn/7003624', 'http://www.geonames.org/2749990', 'http://www.gemeentegeschiedenis.nl/provincie/Noord-Brabant', ''),
(11, 'Zeeland', 'Ze', 'http://vocab.getty.edu/tgn/7003635', 'http://www.geonames.org/2744011', 'http://www.gemeentegeschiedenis.nl/provincie/Zeeland', ''),
(12, 'Limburg', 'Li', 'http://vocab.getty.edu/tgn/7003622', 'http://www.geonames.org/2751596', 'http://www.gemeentegeschiedenis.nl/provincie/Limburg', '');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `provincies`
--
ALTER TABLE `provincies`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `provincies`
--
ALTER TABLE `provincies`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
