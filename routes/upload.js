var express = require('express');
var router = express.Router();

var multer = require('multer');

//Destination Of Images and Renaming Of Images
var storage = multer.diskStorage({
	destination: function(req,file,cb){
		cb(null,'Images/');
	},
	filename: function(req,file,cb){
		cb(null,file.originalname);
	}
	
});
//Restriction On Image Size
var upload = multer({

	storage:storage,
}).array('file',10);
console.log("upload connected");
//POST Request To Upload Image
router.post('/', (req,res) =>{
	console.log("Hello World");
   	upload(req,res,function(err){
		//console.log(req);
		if(err){
			console.log(err);
			res.sendStatus(400);
		}
		else{	
			console.log("Succesfully Uploaded");
			res.sendFile("C:/Users/ASUS/Desktop/IP/bhachat ghat/Bachat-Gat/vendor.html")
		}
	});
});

module.exports=router;