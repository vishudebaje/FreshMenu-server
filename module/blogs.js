const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    id: {
         type: Number,
         required: true,
         unique: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Blogs = mongoose.model('Blogs', blogsSchema);

module.exports = Blogs;
