const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: {
         type: Number,
         required: true,
         unique: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
