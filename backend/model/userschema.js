const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const validator = require("validator");
const crypto = require("crypto");


const userschema = new mongoose.Schema({
    user_id: {
        type: String, // You can use the appropriate data type for 'user_id'
        unique: true, // Ensure 'user_id' is unique for each user
        required: true, // Make it required
      },
      name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            },
        },
    ],
    resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// we are hasing the password
userschema.pre('save', async function (next) {
    console.log("hi from inside");
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// we are generating token
userschema.methods.generateAuthToken = async function () {
    try {
        if (!this._id || !this.tokens) {
            throw new Error("User ID or tokens array is missing.");
        }

        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY || "");

        // Ensure that this.tokens is an array before using concat
        if (!Array.isArray(this.tokens)) {
            this.tokens = [];
        }
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

userschema.methods.getResetPasswordToken = function () {
    //Generating Token:-
    const resetToken = crypto.randomBytes(20).toString("hex"); //only randomBytes :- <buffer> 9c 35 36 78 </bufer>
    //tostring()+> 75r37rtie@@^$&#@)$ , toString("hex")=> 35324actr365bewrh834b3jreuyf9d
  
    //Hashinf and adding to userschema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; //converting it into millisec
  
    return resetToken;
  };
  

const User = mongoose.model('PUSER', userschema); // Updated collection name and model name
module.exports = User;



// const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const userschema = new mongoose.Schema({
//    name: {
//        type:String,
//        required:true
//    },
//    phone: {
//        type: Number,
//        required:true
//    },
//    work: {
//        type:String,
//        required:true
//    },
//    email: {
//        type:String,
//        required:true
//    },
//    password: {
//        type:String,
//        required:true
//    },
//    cpassword: {
//        type:String,
//        required:true
//    },
//    tokens: [
//        {
//            token: {
//                type: String,
//                required:true
//            }
//        }
//    ]
// })

// // we are hasing the password

// userschema.pre('save', async function (next){
//    console.log("hi from inside")
//  if(this.isModified('password')){

//   this.password = await bcrypt.hash(this.password, 12);
//   this.cpassword = await bcrypt.hash(this.cpassword, 12);
//  }
//  next();
// }); 

// // we are generating token
// userschema.methods.generateAuthToken = async function(){
//    try{
    
//     if (!this._id || !this.tokens) {
//         throw new Error("User ID or tokens array is missing.");
//       }
  
//       let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY || "");
  
//       // Ensure that this.tokens is an array before using concat
//       if (!Array.isArray(this.tokens)) {
//         this.tokens = [];
//       }
  
//       this.tokens = this.tokens.concat({ token: token });
  
//       await this.save();
//       return token;
//     } catch (err) {
//       console.log(err); 
// }}


// const User = mongoose.model('USER', userschema);

// module.exports = User;

// // let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY || "");
// //        this.tokens = this.tokens.concat({ token: token });
// //        await this.save();
// //        return token;
// //    }   catch (err){
// //    console.log(err);