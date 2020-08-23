
// Crea la base de datos y sus colleciones
use enCode;
db.createCollection('usuarios');
db.createCollection('plumas');
db.createCollection('proyectos');


//Insertar Usuarios
db.usuarios.insertMany([
    {
        "username": "Emily",
        "email": "emily@gmail.com",
        "password": "emily"
    },
    {
    "username":"Usuario 1",
    "email":"usuario1@gmail.com",
    "password":"usuario1",
    "proyectos":[
        {
            "_id":ObjectId(),
            "tituloProyecto":"Proyecto 1",
            "documentosHTML":[
                {
                    "tituloDocumentoHTML":"Documento HTML 1",
                    "documentoHTML":"Descripcion documento HTML 1"
                },
                {
                    "tituloDocumentoHTML":"Documento HTML 2",
                    "documentoHTML":"Descripcion documento HTML 2"
                }
            ],
            "documentosCSS":[
                {
                    "tituloDocumentoCSS":"Documento CSS 1",
                    "documentoCSS":"Descripcion documento CSS 1"
                }
            ],
            "documentosJS":[
                {
                    "tituloDocumentoJS":"Documento JS 1",
                    "documentoJS":"Descripcion documento JS 1"
                }
            ]
        }
    ],
    "plumas":[
        {
            "_id":ObjectId(),
            "tiituloPluma":"*Pluma 1*",
            "documentos":[
                {
                    "documentoHTML":"Documento HTML 1",
                    "documentoCSS":"Documento CSS 1",
                    "documentoJS":"Documento JS 1"
                }
            ]
        }
    ]
}])



//Insertar Proyectos
db.proyectos.insertMany([{
    "tituloProyecto": "Proyecto Prueba",
    "descripcionProyecto":"Conexión de prueba",
    "documentosHTML": [],
    "documentosCSS": [],
    "documentosJS": []
},
{
    "tituloProyecto": "Probando Conexión",
    "descripcionProyecto":"Conexión de prueba",
    "documentosHTML": [],
    "documentosCSS": [],
    "documentosJS": []
}
])

//Insertar Plumas
db.plumas.insertMany([{
    "tituloPluma":"Pluma Prueba",
    "descripcionPluma":"descripcion de pluma",
    "documentoHTML":"Documento HTML",
    "documentoCSS":"Documento CSS",
    "documentoJS":"Documento JS"
},
{
    "tituloPluma":"Pluma Conexión",
    "descripcionPluma":"descripcion de pluma",
    "documentoHTML":"Documento HTML",
    "documentoCSS":"Documento CSS",
    "documentoJS":"Documento JS"
},
{
    "tituloPluma":"Pluma Prueba",
    "descripcionPluma":"descripcion de pluma",
    "documentoHTML": 'App 18',
    "documentoCSS": 'img/app-icons/18.webp',
    "documentoJS": 'Desarrollador 16',
},
{
    "tituloPluma":"Pluma Prueba",
    "descripcionPluma":"descripcion de pluma",
    "documentoHTML": 'h1 {↵    color:red;↵}',
    "documentoCSS": '<div id="contenedor"></div>',
    "documentoJS": 'function hola(){↵    document.getElementById("contenedor").innerHTML += ↵        `  ↵        <h1>Hola</h1>↵        `; ↵}↵hola();'
}
])



//Uno de los usuarios que registrados:
    //Quedo como valor estatico solo para evitar que lo tenga que escribir 
    usuario: emily@gmail.com
    contraseña: emily
