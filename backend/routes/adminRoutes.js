const express = require('express');
const { addUser, addStore, getDashboardDetails } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add-user', protect, admin, addUser);
router.post('/add-store', protect, admin, addStore);
router.get('/dashboard', protect, admin, getDashboardDetails);

module.exports = router;
