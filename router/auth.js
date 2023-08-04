const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../model/userschema");

router.get('/', (req, res) => {
    res.send(`Hello rourt`);
})

// Using Promises
// router.post('/register', (req, res) => {

//     const {name,email,phone,work,password,cpassword } = req.body;
   
//    if(!name || !email || !phone || !work || !password || !cpassword ){
//     return res.status(422).json({ error: "PLz filled properly"});
//    }

//    User.findOne({email: email })
//    .then((userExist) => {
//     if (userExist) {
//         return res.status(422).json({ error: "Email already exist"});
//     }

//     const user = new User({ name, email, phone, work, password, cpassword });

//     user.save().then(() => {
//         res.status(201).json({ message: "user registered successfully"});
//     }).catch((err) => res.status(500).json({ error: "Failed to registered "}));

//    }).catch(err => { console.log(err); });

// });

router.post('/register', async (req, res) => {

    const {name,email,phone,work,password,cpassword } = req.body;
   
   if(!name || !email || !phone || !work || !password || !cpassword ){
    return res.status(422).json({ error: "PLz filled properly"});
   }

   try {

   const userExist = await User.findOne({email: email })

   if (userExist) {
    return res.status(422).json({ error: "Email already exist"});
}

const user = new User({ name, email, phone, work, password, cpassword });

await user.save();

res.status(201).json({ message: "user registered successfully"});

 
   } catch (err) {
    console.log(err); 
   }


});


//  login route 

router.post('/signin',async (req, res) => {
try {
     const { email, password } = req.body;

     if(!email || !password){
        return res.status(400).json({error:"Invalid Credentials"})
     }
const userlogin = await User.findOne({ email: email});

console.log(userlogin);

if(!userlogin){
    res.status(400).json({error: "user error"});
}else{
res.json({message: "user Signin Successfully"});
}


} catch(err) {
    console.log(err);
}

})

module.exports = router;