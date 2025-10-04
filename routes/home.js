const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getHome, populateHome } = require('../controllers/homeController');

router.get('/home', getHome);
router.post('/populate-home', populateHome);

module.exports = router;
