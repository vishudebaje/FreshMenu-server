const mongoose = require('mongoose');
const Home = require('./module/home');
const Blogs = require('./module/blogs');
const Reviews = require('./module/reviews');
const homeData = require('./module/home.json');
const blogsData = require('./module/blogs.json');
const reviewsData = require('./module/reviews.json');

async function populate() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');

    // Populate home
    await Home.deleteMany({});
    await Home.create(homeData.home);

    // Populate blogs
    await Blogs.deleteMany({});
    await Blogs.insertMany(blogsData.blogs);

    // Populate reviews
    await Reviews.deleteMany({});
    await Reviews.insertMany(reviewsData.reviews);

    console.log('Data populated successfully');
  } catch (error) {
    console.error('Error populating data:', error);
  } finally {
    mongoose.connection.close();
  }
}

populate();
