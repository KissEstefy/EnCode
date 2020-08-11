

//Usuarios
db.usuarios.insertMany([{
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




//Plumas
db.plumas.insertMany([{
    "tituloPluma":"Pluma 1",
    "descripcionPluma":"descripcion de pluma 1",
    "documentoHTML":"Documento HTML 1",
    "documentoCSS":"Documento CSS 1",
    "documentoJS":"Documento JS 1"
}])

