const Blogs = require('../module/blogs');
const blogs = require('../module/blogs.json');

const getBlogs = async (req, res) => {
  try {
    const blogsData = await Blogs.find();
    res.json({blogs: blogsData});
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs data' });
  }
};

const populateBlogs = async (req, res) => {
  try {
    await Blogs.deleteMany({});
    const blogsData = blogs;
    await Blogs.insertMany(blogsData);
    res.json({ message: 'Blogs data populated successfully', count: blogsData.length });
  } catch (error) {
    console.error('Error populating blogs:', error);
    res.status(500).json({ error: 'Failed to populate blogs data' });
  }
};

module.exports = {
  getBlogs,
  populateBlogs
};
