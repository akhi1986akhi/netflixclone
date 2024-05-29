const mongoose = require('mongoose');
const SignSchema =new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    contact:String,
    role:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});
module.exports = mongoose.model("sign", SignSchema)
