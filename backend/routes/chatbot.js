const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/api/chat/question', chatController.saveQuestion);

module.exports = router;