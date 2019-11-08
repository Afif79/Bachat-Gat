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
        console.log('Not connected to MySql.\n');
    }
});

router.post('/', (req, res) =>{
    console.log("I got called images");
    let arr = [];
    var name = req.body.name;
    var price = req.body.price;
	//Query to select the tuple of the user
	connection.query('insert into add_cart (name,price) values(?,?)',[name,price], function (error, result) {
    if (error)
	{
		console.log("error");
		res.sendStatus(400);
    }
	else
	{
            //User exists
            console.log("ok");
		res.status(200);
    }
    });
});

module.exports=router;

