const express = require('express');

const respuesta = require('../../red/respuestas')
const controlador = require('./controlador');

const router = express.Router();

//se especifica el directorio raiz '/' y se exporta la respuesta
router.get('/', function(req, res) {
    const todos = controlador.todos();
    respuesta.success(req, res, todos, 200)
})

module.exports = router