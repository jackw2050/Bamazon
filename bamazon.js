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
       // GreatBayStart();
    } else {
        console.log("Error connecting database ... "+ connection.threadId);
    }
});



connection.query('SELECT * from inventory', function(err, rows, fields) {
  if (!err)
    //   console.log(JSON.stringify(wordObject.locationArray, null, 2));
    console.log('The solution is: ', rows, fields );
  else
    console.log('Error while performing Query.');
});