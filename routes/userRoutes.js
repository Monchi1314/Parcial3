const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const validateToken = require('../middlewares/validateToken');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.post('/login', (req, res) => {

});

router.get('/:id', validateToken, (req, res) => {

});

router.post('/', validateUser, (req, res) => {

});

router.put('/:id', validateToken, (req, res) => {

});

router.delete('/:id', validateToken, (req, res) => {
  
});

module.exports = router;
