 const mongoose = require("mongoose");
 const bcrypt = require('bcryptjs')

 const userschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    work: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    cpassword: {
        type:String,
        required:true
    },
 })

 // we are hasing the password

 userschema.pre('save', async function (next){
    console.log("hi from inside")
  if(this.isModified('password')){

   this.password = await bcrypt.hash(this.password, 12);
   this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
 }); 


// we are generating token


 
 const User = mongoose.model('USER', userschema);

 module.exports = User;
