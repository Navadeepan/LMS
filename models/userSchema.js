const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true,
        unique : true,
        lowercase : true
    },
    password :{
        type: String,
        required:true,
        minLength : 6
    },
    confirmPassword :{
        type: String,
        required:true,
        minLength : 6
    },
},{timestamps:true,versionKey:false})

const User = mongoose.model('user',userSchema);


module.exports = User;