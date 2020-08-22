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


//Guardar proyecto por usuario
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