const express =require('express');
const app = express();

require("dotenv").config()
const cors =require('cors');
const bodyParser = require('body-parser')
const port = 3000;
app.use(cors());
app.use(bodyParser.json());


require('./dbconnection')


const login = require('./routes/login');

app.use('/v2/api',login);

const sign = require('./routes/sign');
app.use('/v2/api/users',sign);

const video = require('./routes/video');
app.use('/v2/api/video',video);


app.listen(port,()=>{
    console.log('Server Running on port', port);
})