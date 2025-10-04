const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getMenu, populateMenu } = require('../controllers/menuController');

router.get('/Menu', auth, getMenu);
router.post('/populate-menu', populateMenu);

module.exports = router;
