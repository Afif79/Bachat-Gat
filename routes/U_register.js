var express = require('express');
var router = express.Router();

// MySQL Connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bg'
});

connection.connect(function(err) {
    if (!err) {
        console.log('Connected to MySql!\n');
    } else {
        console.log(err);
    }
});
router.post('/', (req, res) =>{
	console.log("I got called")
	var username= req.body.username;
	var email = req.body.email;
   	var password = req.body.password;
	var phone = req.body.phone;
	var address = req.body.address;
	console.log(username);
	//Query to select the tuple of the user
	connection.query('Insert into customer(vname,vemail,vpassword,vphone,address) values(?,?,?,?,?)',[username,email,password,phone,address], function (error, results, fields) {
    if (error)
	{
		console.log(error);
		res.status(400);
    }
	else
	{
		res.sendStatus(200);
		console.log("Registered!!!!");
    }
    });
});

module.exports=router;
