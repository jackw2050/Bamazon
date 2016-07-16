// add schema to homework file to recreate database
// add department name



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
        DisplayInventoryToCustomer();
    } else {
        console.log("Error connecting database ... " + connection.threadId);
    }
});






function DisplayInventoryToCustomer() {
    connection.query('SELECT * from inventory', function(err, rows, fields) {
        if (!err) {
            console.log("-----------------------------------------------------------------------------------------------------------");
            console.log("|  " + "ID" + "\t|  " + FillLineUp("ItemName", 55) + "\t|  " + "Price" + "\t|  " + FillLineUp("Inventory",15)  + "|");
            console.log("-----------------------------------------------------------------------------------------------------------");
            for (var ii = 0; ii < rows.length; ii++) {
                console.log("|  " + rows[ii].ItemID + "\t|  " + FillLineUp(rows[ii].ProductName, 55) + "\t|  " + "$" + FillLineUp(rows[ii].Price, 15) + "\t|  " + FillLineUp((rows[ii].StockQuantity).toString(),15) + "|");
            }
            console.log("-----------------------------------------------------------------------------------------------------------");
            QueryCustomer();
        } else
            console.log('Error while performing Query.');
    });
}


function QueryCustomer() {
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




function updateItem(item, quantity, quantityRequested) {
    console.log("UPDATE");
    connection.query("UPDATE inventory SET ? WHERE ?", [{
        StockQuantity: quantity
    }, {
        ItemID: item
    }], function(err, res) {
        if (!err) {
           // console.log(res);
            PrintCustomerInvoice(item, quantityRequested);
            return;
        }
        else{
            console.log("error");
            console.log("Insufficient quantity.  Please reduce your order and try again.");
        }
    });
}






function PrintCustomerInvoice(itemIdRequested, quantityRequested) {
    connection.query("SELECT * from inventory WHERE ?", [
        { ItemID: itemIdRequested }
    ], function(err, rows, fields) {
        if (!err) {
           // console.log(quantityRequested);
            console.log("Order Complete\n");
            console.log("-----------------------------------------------------------------------------------------------------------------------");
            console.log("|  " + "ID"           + "\t|  " + FillLineUp("ItemName", 55)          + "\t|  " + FillLineUp("Price", 10)             + " |  " + FillLineUp("Qty Ordered", 15)     + "|   " + FillLineUp("Total", 10) + "|");
            console.log("-----------------------------------------------------------------------------------------------------------------------");
            console.log("|  " + rows[0].ItemID + "\t|  " + FillLineUp(rows[0].ProductName, 55) + "\t|  " + "$" + FillLineUp(rows[0].Price.toString(), 10) + "|  " + FillLineUp(quantityRequested.toString(), 15) + "|   " +  "$" + FillLineUp( (rows[0].Price  *  parseInt(quantityRequested).toString()), 10) + " |");
            console.log("-----------------------------------------------------------------------------------------------------------------------");
        //    updateItem(itemIdRequested, (rows[0].StockQuantity  -  quantityRequested)) ;
        } else
            console.log('Error while performing Query.');
    });
}





function CheckInventoryCustomer(itemIdRequested, quantityRequested) {
    connection.query("SELECT StockQuantity from inventory WHERE ?", [
        { ItemID: itemIdRequested }
    ], function(err, rows, fields) {
        if (!err) {

            if (parseInt(rows[0].StockQuantity) >= parseInt(quantityRequested) ) {
                var newQty = parseInt(rows[0].StockQuantity) -  quantityRequested;

                updateItem(itemIdRequested, newQty, quantityRequested)
                return true;
            } else {
                console.log("Insufficient quantity.  Please reduce your order and try again.");
                return false;
            }
        } else
            console.log('Error while performing Query.');
    });
}






function FillLineUp(strToFill, maxLength) {
    for (var ii = strToFill.length; ii < maxLength; ii++) {
        strToFill += " ";
    }
    return strToFill;
}
