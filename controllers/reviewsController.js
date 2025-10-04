const Reviews = require('../module/reviews');
const reviews = require('../module/reviews.json');

const getReviews = async (req, res) => {
  try {
    const reviewsData = await Reviews.find();
    res.json({reviews: reviewsData});
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews data' });
  }
};

const populateReviews = async (req, res) => {
  try {
    await Reviews.deleteMany({});
    const reviewsData = reviews.reviews;
    await Reviews.insertMany(reviewsData);
    res.json({ message: 'Reviews data populated successfully', count: reviewsData.length });
  } catch (error) {
    console.error('Error populating reviews:', error);
    res.status(500).json({ error: 'Failed to populate reviews data' });
  }
};

module.exports = {
  getReviews,
  populateReviews
};
