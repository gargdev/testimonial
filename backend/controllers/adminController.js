const User = require('../models/User');
const Store = require('../models/Store');

// Add user
const addUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    name,
    email,
    password,
    address,
    role,
  });

  if (user) {
    res.status(201).json({ message: 'User added successfully' });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Add store
const addStore = async (req, res) => {
  const { name, email, address } = req.body;

  const storeExists = await Store.findOne({ email });

  if (storeExists) {
    return res.status(400).json({ message: 'Store already exists' });
  }

  const store = await Store.create({
    name,
    email,
    address,
  });

  if (store) {
    res.status(201).json({ message: 'Store added successfully' });
  } else {
    res.status(400).json({ message: 'Invalid store data' });
  }
};

// Get dashboard details
const getDashboardDetails = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalStores = await Store.countDocuments();
  const totalRatings = await Store.aggregate([
    { $unwind: '$ratings' },
    { $count: 'total' },
  ]);

  res.json({
    totalUsers,
    totalStores,
    totalRatings: totalRatings[0]?.total || 0,
  });
};

module.exports = {
  addUser,
  addStore,
  getDashboardDetails,
};
