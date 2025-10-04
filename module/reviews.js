const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    customerName:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
