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
	//Query to select the tuple of the user
	connection.query('SELECT * FROM add_cart', function (error, result) {
    if (error)
	{
		console.log("error");
		res.sendStatus(400);
    }
	else
	{
		var data = result;
        //console.log(data)
        console.log(result[0].location);
        for(var i=0,len=data.length;i<len;i++){
            arr.push(data[i].location);
            arr.push(data[i].name);
                arr.push(data[i].price);
		}
			//User exists
		res.status(200).send(arr);
    }
    });
});

module.exports=router;

