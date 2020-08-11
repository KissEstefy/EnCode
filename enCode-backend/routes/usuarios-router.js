var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario'); 

var usuarios = [];

router.get('/', function (req, res) {
    res.send("Peticion recibida"); 
});


router.post('/register', (req, res)=>{
    const {username, email, password} = req.body;

    const user = new usuario({username, email, password});
    user.save(error=>{
        if (error) {
            res.status(500).send('El usuario ya ha sido registrado');
        } else {
            res.status(200).send('Usuario registrado exitosamente'); 
        }
    });
});


router.post('/authenticate', (req, res)=>{
    const {email, password} = req.body;

    usuario.findOne({email}, (error, usuario)=>{
        if (error) {
            res.status(500).send('Error al autenticar el usuario');
        } else if (!usuario) {
            res.status(500).send('El usuario no existe');
        } else {
           usuario.isCorrectPassword(password, (error, result)=>{
                if (error) {
                    res.status(500).send('Error al autenticar el usuario');
                } else if(result) {
                    res.status(200).send('Usuario autenticado correctamente');
                } else {
                    res.status(500).send('Usuario y/o contraseña incorrecta');

                }
           });
        }
    });

});

router.get('/mostrar', (req, res)=>{
    usuario.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;