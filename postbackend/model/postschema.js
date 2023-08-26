const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
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
About: {
    type:String,
    required:true
},
  Requirepost: {
       type:String,
       required:true
   },
   Skillsrequired: {
       type:String,
       required:true
   },
   Stipend: {
    type: Number,
    required:true
},
  Duration: {
       type:Number,
       required:true
   },
   Start: {
    type:String,
    required:true
},
Perks: {
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