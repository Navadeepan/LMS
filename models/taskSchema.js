
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasks = new Schema({
    task :{
        type: String,
        required:true
    },
},{timestamps:true,versionKey:false})

const task = mongoose.model("task",tasks);


module.exports = task