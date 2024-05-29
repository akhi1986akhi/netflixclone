const express =require('express');
const router = express.Router();
const User = require('../models/sign');
const { create } = require('../models/login');
const jwt = require('jsonwebtoken');
router.get("/", (req, res) => {
    User.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            console.error("Error:", error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
  });

async function checkEmail(req, res, next) {
    try {
        const email = req.body.email;
        const result = await User.findOne({ email: email });
        if (result) {
            return res.status(200).json({
                msg: "Email Already Exists",
                status:'duplicate',
              
            });
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
router.post('/register',checkEmail,(req,res)=>{

    console.log(req.body);

const {fname,
lname,
contact,
email,
password,
role} = req.body;
const createNewForm = new User({
    fname,
    lname,
    contact,
    email,
    password,
    role

})

createNewForm.save().then((result)=>{
res.status(201).json({msg:'Registration Successfull!', status:'success',result})
})

.catch((e)=>{
    console.log(e)
})


  
})


function generateToken(payload){

    const token = jwt.sign(payload, 'secreat_key');

    return token
}

router.post('/login', (req, res) => {
    const { email, password, role } = req.body;

    // Check if email or password is blank
    if (!email || !password) {
        return res.status(500).json({ error: "Email and password are required" });
    }

    User.findOne({ email: email }).then((result) => {
        console.log("result", result)
        res.status(200).json({ msg: 'Login Successful!', status: 'success', result, token:generateToken({email:email, password:password}) })
    }).catch((e) => {
        console.error("Error:", e);
        res.status(500).json({ error: "Internal Server Error" });
    });
});



module.exports = router;