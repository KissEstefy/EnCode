var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    tituloPluma: String,
    descripcionPluma: String,
    documentoHTML: String,
    documentoCSS: String,
    documentoJS: String
});
 
module.exports = mongoose.model('plumas', esquema);
 