/*
Challenge #3: Executive View (Final Level)

Create a new MySQL table called Departments. This MySQL table should have the following columns:

DepartmentID

DepartmentName

OverHeadCosts (A dummy number you set for each department)

TotalSales

Modify the BamazonCustomer.js application such that customer transactions update not just the Products inventory but also calculates the total sales from each transaction (quantity * price). Add the revenue from each transaction to the TotalSales for the related department.

Create a new Node application called BamazonExecutive.js. Running this application will:

List a set of menu options: 1) View Product Sales by Department, 2) Create New Department

When an executive enters the View Product Sales option, they should given a summarized table which shows a format like the below:

DepartmentID	DepartmentName	OverHeadCosts	ProductSales	TotalProfit
01				Electronics		10000			20000			10000
02				Clothing		60000			100000			40000
The TotalProfit should be calculated on the fly using the difference between OverheadCosts and ProductSales. TotalProfit should not be stored in any database. You should use a custom alias.

If this does not work, then feel free to go back and just add TotalProfit to the Departments table.

Hint: You will need to use joins to make this work.

Hint: You may need to look into grouping in MySQL.

*/