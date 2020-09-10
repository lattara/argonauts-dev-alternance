'use strict';
const dbConn = require('../config/mysql.config');


//Argonaut object create
const Argonaut = function (argonaut) {
    this.id - argonaut.id;
    this.name = argonaut.name;
};

Argonaut.create = function (newArgonaut, result) {
    dbConn.query("INSERT INTO argo set ?", newArgonaut, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Argonaut.findById = function (id, result) {
    dbConn.query("Select * from argo where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Argonaut.findAll = function (result) {
    dbConn.query("Select * from argo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('argonauts : ', res);
            result(null, res);
        }
    });
};

Argonaut.update = function (id, arg, result) {
    dbConn.query("UPDATE argo SET name=?, rank=? WHERE id = ?", [arg.name, arg.rank, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Argonaut.delete = function (id, result) {
    dbConn.query("DELETE FROM argo WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Argonaut;