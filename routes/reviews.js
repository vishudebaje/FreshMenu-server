const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getReviews, populateReviews } = require('../controllers/reviewsController');

router.get('/reviews', auth, getReviews);
router.post('/populate-reviews', populateReviews);

module.exports = router;
