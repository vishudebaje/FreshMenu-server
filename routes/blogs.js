const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getBlogs, populateBlogs } = require('../controllers/blogsController');

router.get('/blogs', auth, getBlogs);
router.post('/populate-blogs', populateBlogs);

module.exports = router;
