var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var cors = require('cors');
app.use(cors());

var register = require('./routes/register');
var U_login = require('./routes/U_login');
var V_login = require('./routes/V_login');
var upload = require('./routes/upload');
var images = require('./routes/images');

app.use('/register',register);
app.use('/U_login',U_login);
app.use('/V_login',V_login);
app.use('/upload',upload);
app.use('/images',images);

app.listen(4000,(req,res)=>{
    console.log("Server started!!!")
});

module.exports=app;