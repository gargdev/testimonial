const express = require('express');
const { getAllStores, rateStore, updateRating } = require('../controllers/storeController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getAllStores);
router.post('/rate/:id', protect, rateStore);
router.put('/rate/:id', protect, updateRating);

module.exports = router;
