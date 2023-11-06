import jwt from 'jsonwebtoken';

export const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET || "",{
        expiresIn:"5d"
    })
}

// const jwt = require('jsonwebtoken');
// const generateToken = function(id) {
//     return jwt.sign({ id }, process.env.JWT_SECRET || '', {
//       expiresIn: '5d',
//     });
//   };
  
// module.exports = generateToken;