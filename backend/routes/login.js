const express =require('express');
const router = express.Router();
const User = require('../models/login')

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
router.post('/login',checkEmail,(req,res)=>{

    console.log(req.body);

const {

email,
password,
role} = req.body;


User.find({email:email}).then((result)=>{
    console.log("result",result)
res.status(200).json({msg:'Login Successfull!', status:'success',result})
})

.catch((e)=>{
    console.log(e)
})


  
})




module.exports = router




