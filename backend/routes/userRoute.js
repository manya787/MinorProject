// import express from 'express';
// import { loginController, registerController,allUsers } from '../controllers/userController.js';
// import {protect} from '../middleware/auth.js';
// const router = express.Router();


// router.route("/").get(protect,allUsers);

// router.post("/register",registerController);
// router.post("/login",loginController);



// export default router;

const express = require('express');
const { loginController, registerController, allUsers } = require('../controllers/userController.js');
const { protect } = require('../middleware/authen.js');
const router = express.Router();

router.get('/', protect, allUsers);
router.post('/register', registerController);
router.post('/login', loginController);

module.exports = router;
