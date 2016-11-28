'use strict';

var express = require('express');

var app = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);//CORS middleware
app.use(express.bodyParser());//使用express.bodyParser()即可透過req.body得到post的資料


app.get('/', function (req, res) {
    console.log('/ init');

});

app.listen(3000, function () {
    console.log('server running at port 3000!');
});