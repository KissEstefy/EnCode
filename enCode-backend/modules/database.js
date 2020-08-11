var mongoose = require('mongoose');

let bd = 'enCode';
let port = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    } 
    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(res=>{
            console.log('Se conecto a mongodb');
        })
        .catch(error=>{
            console.log(error);
        });
        mongoose.set('useCreateIndex', true)
    }
}

module.exports = new Database();