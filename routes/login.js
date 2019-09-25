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
	console.log("I got called");
	var username= req.body.username;
	   var password = req.body.password;
	   console.log(username);
	//Query to select the tuple of the user
	connection.query('SELECT * FROM admin WHERE username = ?',[username], function (error, results, fields) {
    if (error)
	{
		console.log("error");
		res.sendStatus(400);
    }
	else
	{
		console.log(results);
		if(results.length >0)
		{
			//User exists
			if(results[0].Password == password)
			{
				//User password match
				console.log("cahala ");
				res.sendStatus(200);
			}
	        else{
			//Users password do not match
			console.log("error");
            res.sendStatus(400);
			}
        }
		else
		{
			//User does not exist
			res.sendStatus(400);
		}
    }
    });
});

module.exports=router;

