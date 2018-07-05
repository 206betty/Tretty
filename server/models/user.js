const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
})

 module.exports = mongoose.model("user", userSchema)