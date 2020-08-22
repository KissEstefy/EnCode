var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var usuariosRouter = require('./routes/usuarios-router');
var plumasRouter = require('./routes/plumas-router');
var proyectosRouter = require('./routes/proyectos-router');



var database = require('./modules/database');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/plumas', plumasRouter); //cambiem plumas de posicion (estaba en plumas-router)
app.use('/proyectos', proyectosRouter); //cambiem plumas de posicion (estaba en plumas-router)


//app.use('/register', usuariosRouter);
app.use('/', usuariosRouter);
//app.use('/mostrar', usuariosRouter);
//app.use('/authenticate', usuariosRouter);




app.listen(8888, function () {
    console.log("Servidor levantado");
});