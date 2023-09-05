const jwt = require('jsonwebtoken'); 
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv")

dotenv.config()

require('../db/conn');
const User = require("../model/userschema");
const Post = require("../model/postschema");

router.get('/', (req, res) => {
    res.send(`Hello rourt`);
})


router.post('/register', async (req, res) => {

    const {name,email,phone,work,password,cpassword } = req.body;
   
   if(!name || !email || !phone || !work || !password || !cpassword ){
    return res.status(422).json({ error: "PLz filled properly"});
   }

   try {

   const userExist = await User.findOne({email: email })

   if (userExist) {
    return res.status(422).json({ error: "Email already exist"});
}else if( password != cpassword ){
    return res.status(422).json({ error: "password are not matching"});
}else {
    const user = new User({ name, email, phone, work, password, cpassword });

const userRegister = await user.save();

res.status(201).json({ message: "user registered successfully"});

}
 
   } catch (err) {
    console.log(err); 
   }


});


//  login route 

router.post('/signin',async (req, res) => {
try {
    let token;
     const { email, password } = req.body;

     if(!email || !password){
        return res.status(400).json({error:"Pls filled Proper Data"})
     }
const userlogin = await User.findOne({ email: email});

// console.log(userlogin);
if(userlogin){
    const isMatch = await bcrypt.compare( password, userlogin.password);
    
token = await userlogin.generateAuthToken();
console.log(token);

res.cookie("jwtoken", token,{
    expires:new Date(Date.now() + 25892000000),
    httpOnly:true
})
if(!isMatch){
    res.status(400).json({error: "Invalid credentials pass"});
}else{
res.json({message: "user Signin Successfully"});
}
} else {
    res.status(400).json({error: "Invalid credentials"});
}


} catch(err) {
    console.log(err);
}

})

// POST part

router.post('/createpost', async (req, res) => {

    const {Topic,Name,Profession,Workplace,Aboutcompany,Requirepost,Aboutpost,Skillsrequired,Certificationsrequired,Numberofopenings,Stipend,Duration,StartDate,Perks,Email,Linkedin } = req.body;
   
   if( !Topic || !Name || !Profession || !Workplace || !Aboutcompany || !Requirepost|| !Aboutpost || !Skillsrequired || !Certificationsrequired || !Numberofopenings || !Stipend || !Duration || !StartDate || !Perks ||  !Email || !Linkedin ){
    return res.status(422).json({ error: "PLz filled properly"});
   }

   try {

   const userExist = await Post.findOne({email: Email })

   if (userExist) {
    return res.status(422).json({ error: "Email already exist"});
}
else {
    const post = new Post({ Topic, Name, Profession, Workplace,Aboutcompany,Requirepost,Aboutpost,Skillsrequired,Certificationsrequired,Numberofopenings, Stipend, Duration, StartDate , Perks, Email, Linkedin });

const postRegister = await post.save();

res.status(201).json({ message: "Post created successfully"});

}
 
   } catch (err) {
    console.log(err); 
   }


});


//  login route 

router.post('/post',async (req, res) => {
    try {
        let token;
         const { Email} = req.body;
    
         if(!Email){
            return res.status(400).json({error:"Pls filled Proper Data"})
         }
    const userpost = await Post.findOne({ email: Email});
    
    
    // console.log(userlogin);
    if(userpost){
        const isMatch = await bcrypt.compare( Email, userpost.Email);
        
    token = await userpost.generateAuthToken();
    console.log(token);
    
    res.cookie("jwtoken", token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
    })
    if(!isMatch){
        res.status(400).json({error: "Invalid credentials pass"});
    }else{
    res.json({message: "user createPost Successfully"});
    }
    } else {
        res.status(400).json({error: "Invalid credentials"});
    }
    
    
    } catch(err) {
        console.log(err);
    }
    })
    
module.exports = router;


