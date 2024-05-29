const mongoose = require('mongoose');

mongoose.connect(process.env.DBCONNECTION,{

})

.then(()=>{
    console.log("Database connected")
})

.catch((e)=>{
    console.log("database connection failed..", e)
    
})

