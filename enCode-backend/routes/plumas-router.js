var express = require('express');
var router = express.Router();
var pluma = require('../models/pluma');

router.get('/plumas', function (req, res) {
    res.send("Peticion recibida plumas");
});

router.get('/mostrarPlumas',function (req, res){
    pluma.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;