const express = require('express');
const signUprouter = express.Router();
const {signUp} = require('../controllers/user');



signUprouter.post('/', signUp);

module.exports = signUprouter;

