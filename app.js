const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const homeRoutes = require('./routes/home');
const blogsRoutes = require('./routes/blogs');
const reviewsRoutes = require('./routes/reviews');

const app = express();
app.use(cors());
app.use(express.json());

// Auth routes (no protection needed)
app.use('/auth', authRoutes);

// Menu routes
app.use('/', menuRoutes);

// Home routes
app.use('/', homeRoutes);

// Blogs routes
app.use('/', blogsRoutes);

// Reviews routes
app.use('/', reviewsRoutes);

const port = process.env.PORT || 5001;

// MongoDB connection
mongoose
  .connect(process.env.mongo_url) // 👈 Using env variable
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
