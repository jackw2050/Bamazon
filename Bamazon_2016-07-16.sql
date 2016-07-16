# ************************************************************
# Sequel Pro SQL dump
# Version 4529
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.13)
# Database: Bamazon
# Generation Time: 2016-07-16 21:17:54 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table inventory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `inventory`;

CREATE TABLE `inventory` (
  `ItemID` int(10) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(200) NOT NULL,
  `DepartmentName` varchar(50) NOT NULL DEFAULT '',
  `Price` decimal(10,2) NOT NULL,
  `StockQuantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;

INSERT INTO `inventory` (`ItemID`, `ProductName`, `DepartmentName`, `Price`, `StockQuantity`)
VALUES
	(1,'Zojirushi NP-NVC10 Induction Heating Pressure Cooker ','cookware',388.68,567),
	(2,'Data Structures and Algorithms Made Easy','books',36.25,316),
	(3,'Kamado Joe KJ23RH Classic Joe Grill, 18\"','lawn&garden',999.90,944),
	(4,'Amzdeal Portable Dog Backpack, Pet Carrier','Pet Supplies',24.99,193),
	(5,'Schwinn Phocus 1600 Men\'s Road Bike ','Outdoor Recreation',457.63,27),
	(6,'Labconco 7759032 FreeZone 12 Liter Console Freeze Dry System','Industrial & Scientific',43944.49,37),
	(7,'Bauer Nexus 4000 Junior Ice Hockey Skates','Sports & Fitness',159.58,34),
	(8,'Pokemon Kanto Gym Badges League Pin Generation Collection','Sports & Outdoors',10.79,489);

/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
