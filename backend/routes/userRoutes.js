const express = require('express');
const { registerUser, loginUser, updateUserPassword } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update-password', protect, updateUserPassword);

module.exports = router;
