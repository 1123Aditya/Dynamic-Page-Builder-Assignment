const express = require('express');
const router = express.Router();
const PageController = require('../controllers/pageController');

router.post('/', PageController.createPage);
router.get('/', PageController.getPages);

module.exports = router;  // ✅ Must export router
