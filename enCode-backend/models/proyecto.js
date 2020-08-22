var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    tituloProyecto: String,
    descripcionProyecto: String,
    documentosHTML: Array,
    documentosCSS: Array,
    documentosJS: Array
});
 
module.exports = mongoose.model('proyectos', esquema);