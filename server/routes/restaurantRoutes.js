const express = require('express');
const restaurantRouter = express.Router();
const { addRestaurant, getRestaurants } = require('../controllers/restaurantController');

restaurantRouter.post('/restaurants', addRestaurant);
restaurantRouter.get('/restaurants', getRestaurants);

module.exports = restaurantRouter;