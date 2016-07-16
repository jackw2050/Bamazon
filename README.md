# Bamazon

Schema:

CREATE TABLE `inventory` (
  `ItemID` int(10) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(200) NOT NULL,
  `DepartmentName` varchar(50) NOT NULL DEFAULT '',
  `Price` decimal(10,2) NOT NULL,
  `StockQuantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;


Table contents. Comma delimited

