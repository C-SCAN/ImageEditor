const express = require('express');
const logInrouter = express.Router();
const {login} = require('../controllers/user');



logInrouter.post('/', login);

module.exports = logInrouter;