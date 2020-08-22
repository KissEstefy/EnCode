var express = require('express');
var router = express.Router();
var pluma = require('../models/pluma');

router.get('/', function (req, res) {
    res.send("Peticion recibida plumas");
});
 

//Mostrar todas las plumas
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



//Obtener plumas por usuario
router.get('/:idUsuario/plumas', function (req, res) {
    pluma.find({_id: req.params.idUsuario})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}); 


//Obtener contenido de pluma
router.get('/:idPluma', function (req, res) {
    pluma.find({_id: req.params.idPluma})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}); 


//Guardar plumas por usuario
router.post('/pluma', function (req, res) {
    let plu = new pluma( 
        {
            tituloPluma: req.body.tituloPluma,
            descripcionPluma: req.body.descripcionPluma,
            documentoHTML: req.body.documentoHTML,
            documentoCSS: req.body.documentoCSS,
            documentoJS: req.body.documentoJS
        }
    );
    plu.save().then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });

});




module.exports = router;