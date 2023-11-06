import express from 'express';
import {protect} from '../middleware/chatauth.js';
import {allMessages, sendMessage } from '../controllers/messageController.js'
//const express = require('express')
//const protect = require('../middleware/chatauth.js');
// const allMessages = require('../controllers/messageController.js')
// const sendMessage = require('../controllers/messageController.js')
const router = express.Router();
router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);
export default router;
//module.exports = router;
