import express from 'express';
import {protect} from '../middleware/chatauth.js';
import { accessChat, addToGroup, createGroupChat, fetchChats, removeFromGroup, renameGroup } from '../controllers/chatController.js'
//const express = require('express')
//const protect = require('../middleware/chatauth.js');
// const accessChat = require('../controllers/chatController.js');
// const addToGroup = require('../controllers/chatController.js');
// const createGroupChat = require('../controllers/chatController.js');
// const fetchChats = require('../controllers/chatController.js');
// const removeFromGroup = require('../controllers/chatController.js');
// const renameGroup = require('../controllers/chatController.js');

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
export default router;
//module.exports = router;