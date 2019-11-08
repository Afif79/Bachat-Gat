var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var cors = require('cors');
app.use(cors());

var U_register = require('./routes/U_register');
var V_register = require('./routes/V_register');
var U_login = require('./routes/U_login');
var V_login = require('./routes/V_login');
var upload = require('./routes/upload');
var images = require('./routes/images');
var cart = require('./routes/cart');
var add_cart=require('./routes/add_cart');

app.use('/add_cart',add_cart);
app.use('/cart',cart);
app.use('/U_register',U_register);
app.use('/V_register',V_register);
app.use('/U_login',U_login);
app.use('/V_login',V_login);
app.use('/upload',upload);
app.use('/images',images);

app.listen(4000,(req,res)=>{
    console.log("Server started!!!")
});

module.exports=app;