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




Screen shots


![Screen shot 1](https://github.com/jackw2050/Bamazon/blob/master/ScreenShot1.png)
![Screen shot 2](https://github.com/jackw2050/Bamazon/blob/master/ScreenShot2.png)
![Screen shot 3](https://github.com/jackw2050/Bamazon/blob/master/ScreenShot3.png)
