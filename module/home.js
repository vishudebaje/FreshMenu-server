const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    heroImage:{
        type: String,
        required: true
    },
    features:{
        type: Array,
        required: true
    }
});

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;

