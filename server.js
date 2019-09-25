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
var login = require('./routes/login');

app.use('/register',register);
app.use('/login',login);

app.listen(4000,(req,res)=>{
    console.log("Server started!!!")
});

module.exports=app;