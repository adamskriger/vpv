var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(express.static('./public/'))


var port = process.env.PORT || 3000;

var server = app.listen(port)
