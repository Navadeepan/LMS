const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDatas = new Schema({
    name :{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
    password :{
        type: String,
        required:true
    },
    confirmPassword :{
        type: String,
        required:true
    },
},{timestamps:true,versionKey:false})

const user = mongoose.model("user",userDatas);


module.exports = user