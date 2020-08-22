var express = require('express');
var router = express.Router();
var proyecto = require('../models/proyecto');

router.get('/', function (req, res) {
    res.send("Peticion recibida proyectos");
});


//Mostrar todas los proyectos
router.get('/mostrarProyectos',function (req, res){
    proyecto.find()
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
}); 


//Obtener proyecto por usuario
router.get('/:idUsuario/proyecto', function (req, res) {
    proyecto.find({_id: req.params.idUsuario})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}); 


//Obtener contenido de proyecto
router.get('/:idProyecto', function (req, res) {
    proyecto.find({_id: req.params.idProyecto})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    })
}); 

//Guardar proyecto 
router.post('/proyecto', function (req, res) {
    let plu = new proyecto( 
        {
            tituloProyecto: req.body.tituloProyecto,
            descripcionProyecto: req.body.descripcionProyecto,
            documentosHTML: req.body.documentoHTML,
            documentosCSS: req.body.documentoCSS,
            documentosJS: req.body.documentoJS
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