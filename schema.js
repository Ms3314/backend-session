const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String ,
        require : true 
    } ,
    email : {
        type : String 
    } ,
    phoneNumber : {
        type : Number 
    },
    createdAt: 
    { 
        type: Date,
        default: Date.now 
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User



