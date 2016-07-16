/*
Challenge #2: Manager View (Next Level)

Create a new Node application called BamazonManager.js. Running this application will:

List a set of menu options: 
1) View Products for Sale 
2) View Low Inventory 
3) Add to Inventory 
4) Add New Product

If a manager selectis option 1 it should list all of the products available for sale: the item IDs, names, prices, and quantities.
If a manager selects option 2 it should list all items for which the quantity available in stores is less than 5.
If a manager selects option 3 it should provide the manager with the ability to "add more" of any item currently in the store.
If a manager selects option 4 it should provide the manager with the ability to add a completely new product to the store.
*/

var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Koisuru2050',
    database: 'Bamazon'
});

connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ... " + connection.threadId);
        DisplayInventoryToManager();
    } else {
        console.log("Error connecting database ... " + connection.threadId);
    }
});






function DisplayInventoryToManager() {
    connection.query('SELECT * from inventory', function(err, rows, fields) {
        if (!err) {
            console.log("-----------------------------------------------------------------------------------------------------------");
            console.log("|  " + "ID" + "\t|  " + FillLineUp("ItemName", 55) + "\t|  " + "Price" + "\t|  " + FillLineUp("Inventory",15)  + "|");
            console.log("-----------------------------------------------------------------------------------------------------------");
            for (var ii = 0; ii < rows.length; ii++) {
                console.log("|  " + rows[ii].ItemID + "\t|  " + FillLineUp(rows[ii].ProductName, 55) + "\t|  " + "$" + FillLineUp(rows[ii].Price, 15) + "\t|  " + FillLineUp((rows[ii].StockQuantity).toString(),15) + "|");
            }
            console.log("-----------------------------------------------------------------------------------------------------------");
            QueryManager();
        } else
            console.log('Error while performing Query.');
    });



function QueryManager() {
    inquirer.prompt([{
        name: "itemNumber",
        message: "Please enter the item number."
    }, {
        name: "quantityRequested",
        message: "How many would you like to buy?"
    }]).then(function(requestInfo) {

         var a = requestInfo.itemNumber;
         var b = requestInfo.quantityRequested ;
       
         CheckInventoryCustomer(a ,b );//  need to change to account for low inventory

    })
}

function FillLineUp(strToFill, maxLength) {
    for (var ii = strToFill.length; ii < maxLength; ii++) {
        strToFill += " ";
    }
    return strToFill;
}




}