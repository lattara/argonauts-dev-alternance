'use strict';


var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : 'arg_db'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;