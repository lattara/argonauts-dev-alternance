'use strict';


const Argonaut = require('./argo.model');


exports.findAll = function (req, res) {
    Argonaut.findAll(function (err, argonaut) {
        if (err)
            res.send(err);
        res.send(argonaut);
    });
};


exports.create = function (req, res) {
    const new_arg = new Argonaut(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Argonaut.create(new_arg, function (err, argonaut) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Argonaut added successfully!", data: argonaut });
        });
    }
};


exports.findById = function (req, res) {
    Argonaut.findById(req.params.id, function (err, argonaut) {
        if (err)
            res.send(err);
        res.json(argonaut);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required fields' });
    } else {
        Argonaut.update(req.params.id, new Argonaut(req.body), function (err, argonaut) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Argonaut successfully updated' });
        });
    }
};


exports.delete = function (req, res) {
    Argonaut.delete(req.params.id, function (err, argonaut) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Argonaut successfully deleted' });
    });
};