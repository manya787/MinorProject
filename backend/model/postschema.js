const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const { link } = require("../router/auth");
require('dotenv').config();

const postschema = new mongoose.Schema({
   Topic: {
        type:String,
        required:true
    },
    Name: {
       type:String,
       required:true
   },
   Profession: {
    type:String,
    required:true
},
Workplace: {
    type:String,
    required:true
},
Aboutcompany: {
    type:String,
    required:true
},
  Requirepost: {
       type:String,
       required:true
   },
   Aboutpost: {
    type:String,
    required:true 
   },
    Skill1: {
        type:String,
        required:true
   },
    Skill2: {
    type:String,
    required:true
   },
    Skill3: {
     type:String,
     required:true
    },
    Skill4: {
    type:String,
    required:true
},
   Certification1: {
    type:String,
    required:true 
   },
   Certification2: {
    type:String,
    required:true 
   },
   Numberofopenings:{
    type: Number,
    required:true
   },
   Stipend: {
    type: Number,
    required:true
},
  Duration: {
       type:String,
       required:true
   },
   StartDate: {
    type:Date,
    required:true
},
Perk1: {
    type:String,
    required:true
},
Perk2: {
    type:String,
    required:true
},
Email: {
    type:String,
    required:true
   },
   Linkedin: {
    type:String,
    required:true
},
   tokens: [
       {
           token: {
               type: String,
               required:true
           }
       }
   ]
})
console.log("hi from inside")

// we are generating token
postschema.methods.generateAuthToken = async function(){
   try{
       let token = jwt.sign({name:this.Name}, process.env.SECRET_KEY || "");
       this.tokens = this.tokens.concat({ token: token });
       await this.save();
       return token;
   }   catch (err){
   console.log(err);
}}


const Post= mongoose.model('POST', postschema);

module.exports = Post;