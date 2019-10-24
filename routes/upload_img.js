var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var express = require('express');
var router = express.Router();

router.post('/', (req, res)=>{
  console.log("done")
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      //console.log(files.filetoupload.name);
      var newpath = 'C:\Users\ASUS\Desktop\IP\bhachat ghat\Bachat-Gat\Images' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        else
        res.sendStatus(200);
        //res.end();
      });
 });
  }
});
module.exports=router;