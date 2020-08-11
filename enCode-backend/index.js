var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var usuariosRouter = require('./routes/usuarios-router');
var plumasRouter = require('./routes/plumas-router');



var database = require('./modules/database');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', plumasRouter);

app.use('/register', usuariosRouter);
app.use('/', usuariosRouter);
app.use('/mostrar', usuariosRouter);
app.use('/authenticate', usuariosRouter);




app.listen(8888, function () {
    console.log("Servidor levantado");
});