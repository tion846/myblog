'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var JsonDB = require('node-json-db');
const cookies = require('js-cookie');
var _ = require('lodash');

var app = express();

var jsonDB = new JsonDB("./blogDB", true, true);
let db = jsonDB.getData("/");

db.push = function (table, data) {
    jsonDB.push("/" + table + "[]", data);
};

var allowcrossdomain = function (req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'get,put,post,delete');
    res.header('access-control-allow-headers', 'content-type');

    next();
};

app.use(allowcrossdomain);//cors middleware

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    console.log('/ init');
    res.json(_.orderBy(db.MESSAGE,['time'],['desc']));
    // res.json(db.USER);
});

app.post('/reg', function (req, res) {
    // req.body = JSON.parse(req.body.data);
    let name = req.body.name;
    let pwd = req.body.password;
    // console.log(name, pwd);

    reg(name, pwd, function (result) {
        res.json(result);
    });

});

app.post('/login', function (req, res) {
    let name = req.body.name;
    let pwd = req.body.password;
    // console.log(name, pwd);

    log(name, pwd, function (result) {
        res.json(result);
    });
    // res.json(db.USER);
});

app.get('/logout', function (req, res) {

});

app.post('/post', function (req, res) {
    let name = req.body.name;
    let msg = req.body.msg;
    let ispublic = req.body.ispublic;
    console.log(name, msg, ispublic);

    post(name, msg, ispublic, function (result) {
        res.json(result);

    });

});

app.listen(3000, function () {
    console.log('server running at port 3000!');
});


var reg = function (name, pwd, callback) {
    if (db.USER.find(u=>u.name === name)) {
        callback({success: 0, msg: "帳號重複!"});
        return;
    }
    db.push('USER', {name, pwd});
    callback({success: 1, msg: "註冊完成"});
};

function log(name, pwd, callback) {
    let user = db.USER.find(u=>u.name === name);
    if (user && user.pwd === pwd) {
        callback({success: 1});
        // cookies.set('name', name);
        // cookies.set('pwd', pwd);
        return;
    }
    callback({success: 0, msg: "帳號或密碼錯誤!"});
}

function post(name, msg, ispublic) {
    let time = new Date().getTime();
    ispublic = ispublic === "true" ? true : false;
    console.log(time);
    db.push('MESSAGE', {name, msg, ispublic, time});
}