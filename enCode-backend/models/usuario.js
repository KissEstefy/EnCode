var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var saltRounds = 10;

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email: {type: String, unique:true},
    password: {type:String, required:true}
});

UserSchema.pre('save', function(next){
    if (this.isNew || this.isModified('password')){
        const document = this;

        bcrypt.hash(document.password, saltRounds, (error, hashedPassword)=>{
            if (error) {
                next(error);
            } else {
                document.password = hashedPassword;
                next();
            }
        }); 
    } else {
        next();
    }

});

UserSchema.methods.isCorrectPassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(error, same) {
        if (error) {
            callback(error);
        } else {
            callback (error, same);
        }
    });
}

module.exports = mongoose.model('usuario', UserSchema);