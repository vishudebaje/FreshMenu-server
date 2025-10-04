// Import Restaurant Model (Mongoose Model)
const Restaurant = require('../Models/Restaurants'); 

/**
 * @desc   Get all restaurants
 * @route  GET /restaurants
 */
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        if (restaurants && restaurants.length > 0) {
            res.status(200).json(restaurants);
        } else {
            res.status(404).json({ message: 'No restaurants found' });
        }
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
    }
};

/**
 * @desc   Get restaurant by ID
 * @route  GET /restaurants/:id
 */
exports.getRestaurantById = async (req, res) => {
    const restaurantId = req.params.id;

    try {
        const restaurant = await Restaurant.findById(restaurantId);

        if (restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'Restaurant not found' });
        }
    } catch (error) {
        console.error('Error fetching restaurant by ID:', error);
        res.status(500).json({ message: 'Error fetching restaurant by ID', error: error.message });
    }
};

/**
 * @desc   Get restaurants by City
 * @route  GET /restaurants/city/:city
 */
exports.getRestaurantsByCity = async (req, res) => {
    const city = req.params.city;

    try {
        const filteredRestaurants = await Restaurant.find({
            city: { $regex: city, $options: 'i' }  // case-insensitive
        });

        if (filteredRestaurants.length > 0) {
            res.status(200).json(filteredRestaurants);
        } else {
            res.status(404).json({ message: 'No restaurants found for the provided city' });
        }
    } catch (error) {
        console.error('Error fetching restaurants by city:', error);
        res.status(500).json({ message: 'Error fetching restaurants by city', error: error.message });
    }
};
