var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    tituloPluma: String,
    descripcionPluma: String,
    plumas: Array
});
 
module.exports = mongoose.model('plumas', esquema);
