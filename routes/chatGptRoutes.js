const express = require('express');
const ChatGpt = require('../models/ChatGpt');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, (req, res) => {

});

router.get('/:id', validateToken, (req, res) => {

});

router.get('/user/:id_user', validateToken, (req, res) => {
    
});

module.exports = router;
