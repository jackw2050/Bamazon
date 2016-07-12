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
            //console.log(JSON.stringify(rows, null, 2));
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
         //   PrintCustomerInvoice(requestInfo.itemNumber, requestInfo.quantityRequested)

        // check if quanltity exists
       // var inventoryGood = CheckInventoryCustomer(requestInfo.itemNumber,requestInfo.quantityRequested );
        //console.log(inventoryGood);
       // console.log((CheckInventoryCustomer(requestInfo.itemNumber,requestInfo.quantityRequested )));
         var a = requestInfo.itemNumber;
            var b = requestInfo.quantityRequested ;
       
       
        if (CheckInventoryCustomer(a ,b)){

            // update inventory   update db on good, return status callback is print receipt
            // update customer
            console.log("printing receipt");
            PrintCustomerInvoice(requestInfo.itemNumber, requestInfo.quantityRequested)

        } else {
            // tell customer there is not enough enventory
            console.log(":(");
        }

    })
}






function PrintCustomerInvoice(itemIdRequested, quantityRequested) {
    connection.query("SELECT * from inventory WHERE ?", [
        { ItemID: itemIdRequested }
    ], function(err, rows, fields) {
        if (!err) {
            console.log("Order Complete\n");
            console.log("---------------------------------------------------------------------------------------------------------");
            console.log("|  " + "ID"           + "\t|  " + FillLineUp("ItemName", 55)          + "\t|  " + FillLineUp("Price", 20)             + "\t|  " + FillLineUp("Qty Ordered", 15)     + "\|" + FillLineUp("Total", 10) + "|");
            console.log("---------------------------------------------------------------------------------------------------------");
            console.log("|  " + rows[0].ItemID + "\t|  " + FillLineUp(rows[0].ProductName, 55) + "\t|  " + "$" + FillLineUp(rows[0].Price, 20) + "|  " + FillLineUp(quantityRequested, 15) + "\t|" +  FillLineUp(rows[0].Price  *  quantityRequested, 10) + "|");
            console.log("---------------------------------------------------------------------------------------------------------");


        } else
            console.log('Error while performing Query.');
    });
}





function CheckInventoryCustomer(itemIdRequested, quantityRequested) {
    connection.query("SELECT StockQuantity from inventory WHERE ?", [
        { ItemID: itemIdRequested }
    ], function(err, rows, fields) {
        if (!err) {
           // console.log("Stock: " + parseInt(rows[0].StockQuantity));
           // console.log("Required: " + parseInt(quantityRequested));
           // console.log(parseInt(rows[0].StockQuantity) > parseInt(quantityRequested));
            if (parseInt(rows[0].StockQuantity) >= parseInt(quantityRequested) ) {
               // console.log(rows[0].StockQuantity , parseInt(quantityRequested));
              // console.log("true");
                return "true";
            } else {
                console.log("not enough");
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





function addItem(flavor, price, quantity) {
    connection.query("INSERT INTO products SET ?", {
        flavor: "Rocky Road",
        price: 3.00,
        quantity: 50
    }, function(err, res) {});
}

function updateItem(flavor, quantity) {
    connection.query("UPDATE products SET ? WHERE ?", [{
        quantity: 100
    }, {
        flavor: "Rocky Road"
    }], function(err, res) {});
}

function deleteItem(flavor) {
    connection.query("DELETE FROM products WHERE ?", {
        flavor: "strawberry"
    }, function(err, res) {});
}

function insertItem(flavor, quantity) {
    connection.query("UPDATE products SET ? WHERE ?", [
        { quantity: 100 },
        { flavor: "rockyroad" }
    ], function(err, res) {});
}
