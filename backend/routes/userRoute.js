const express = require('express')
const protect = require ('../middleware/chatauth.js');
const loginController = require('../controllers/chatuserController.js');
const registerController = require('../controllers/chatuserController.js');
const allUsers = require('../controllers/chatuserController.js');
// import express from 'express';
// import {loginController,registerController,allUsers} from '../controllers/chatuserController.js';
// import {protect} from '../middleware/chatauth.js';
// const router = express.Router();


router.route("/").get(protect,allUsers);

router.post("/register",registerController);
router.post("/login",loginController);


module.exports = router;
// export default router;
