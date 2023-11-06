const jwt = require("jsonwebtoken");
const User = require("../model/userschema");
const Post = require("../model/postschema");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;

        if (typeof token === 'undefined') {
            res.status(401).json({ error: 'Authentication failed. Token is undefined.' });
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY || "");
            const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
            if (!rootUser) {
                throw new Error('User not found');
            }
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
        }
    } catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
};

module.exports = authenticate;


// const jwt = require("jsonwebtoken");
// const User = require("../model/userschema")
// const Post = require("../model/postschema")

// const Authenticate = async (req, res, next) => {
// try {
// // const token = req.cookies.jwtoken;
// // const verifyToken = jwt.verify(token, process.env.SECRET_KEY || "");
// const token = req.cookies.jwtoken;

// if (typeof token === 'undefined') {
//     res.status(401).json({ error: 'Authentication failed. Token is undefined.' });
// } else {
//   const verifyToken = jwt.verify(token, process.env.SECRET_KEY || "");
//   const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
//   if (!rootUser) { throw new Error('User not found')}
// req.token = token;
// req.rootUser = rootUser;
// req.userID = rootUser._id;
// }

// // const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})

// // if (!rootUser) { throw new Error('User not found')}

// // req.token = token;
// // req.rootUser = rootUser;
// // req.userID = rootUser._id;

// } catch (err){
//     res.status(401).send('Unauthorized:No taken provided');
//     console.log(err);
// }
// }

// module.exports = Authenticate;