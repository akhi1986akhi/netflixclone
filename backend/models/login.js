const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email:String,
    password:String,
    role:String
})

module.exports = mongoose.model("login", loginSchema)



