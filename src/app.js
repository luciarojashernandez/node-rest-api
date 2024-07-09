const express = require('express'); //configurar express
const config = require('./config');

const clientes =  require('./modulos/clientes/rutas')//ruta

const app =  express();

//configuration
app.set('port', config.app.port)

//routes
app.use('/api/clientes', clientes)

module.exports = app;