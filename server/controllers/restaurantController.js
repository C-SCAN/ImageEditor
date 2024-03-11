const Restaurant = require('../models/restaurant');

const addRestaurant = async (req, res) => {
  try {
    const { name, place } = req.body;
    const newRestaurant = new Restaurant({ name, place });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addRestaurant,
  getRestaurants,
};
