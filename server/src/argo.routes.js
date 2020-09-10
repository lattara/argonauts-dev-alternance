const express = require('express')
const router = express.Router()
const argoController = require('./argo.controller');


// Retrieve all argonauts
router.get('/', argoController.findAll);


// Create a new argonaut
router.post('/', argoController.create);


// Retrieve a single argonaut with id
router.get('/:id', argoController.findById);


// Update a argonaut with id
router.put('/:id', argoController.update);


// Delete a argonaut with id
router.delete('/:id', argoController.delete);

module.exports = router