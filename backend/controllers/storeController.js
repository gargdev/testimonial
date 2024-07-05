const Store = require('../models/Store');

// Get all stores
const getAllStores = async (req, res) => {
  const stores = await Store.find();
  res.json(stores);
};

// Rate store
const rateStore = async (req, res) => {
  const store = await Store.findById(req.params.id);

  if (store) {
    const existingRating = store.ratings.find(
      (rating) => rating.userId.toString() === req.user._id.toString()
    );

    if (existingRating) {
      return res.status(400).json({ message: 'Store already rated' });
    }

    const newRating = {
      userId: req.user._id,
      rating: req.body.rating,
    };

    store.ratings.push(newRating);
    await store.save();

    res.status(201).json({ message: 'Rating added successfully' });
  } else {
    res.status(404).json({ message: 'Store not found' });
  }
};

// Update rating
const updateRating = async (req, res) => {
  const store = await Store.findById(req.params.id);

  if (store) {
    const rating = store.ratings.find(
      (rating) => rating.userId.toString() === req.user._id.toString()
    );

    if (rating) {
      rating.rating = req.body.rating;
      await store.save();

      res.json({ message: 'Rating updated successfully' });
    } else {
      res.status(404).json({ message: 'Rating not found' });
    }
  } else {
    res.status(404).json({ message: 'Store not found' });
  }
};

module.exports = {
  getAllStores,
  rateStore,
  updateRating,
};
