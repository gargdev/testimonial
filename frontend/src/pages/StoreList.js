import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores, rateStore, updateStoreRating } from '../services/storeService';

const StoreList = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const { loading, error, stores } = useSelector((state) => state.storeList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(getStores());
  }, [dispatch]);

  const handleRating = (storeId, rating) => {
    dispatch(rateStore(storeId, rating));
  };

  const handleUpdateRating = (storeId, rating) => {
    dispatch(updateStoreRating(storeId, rating));
  };

  return (
    <div>
      <h1>Stores</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <input
        type="text"
        placeholder="Search by name or address"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {stores
          .filter(
            (store) =>
              store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              store.address.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((store) => (
            <li key={store._id}>
              <p>Name: {store.name}</p>
              <p>Address: {store.address}</p>
              <p>Overall Rating: {store.ratings.reduce((acc, cur) => acc + cur.rating, 0) / store.ratings.length || 0}</p>
              <p>My Rating: {store.ratings.find((rating) => rating.userId === userInfo._id)?.rating || 'Not rated'}</p>
              {store.ratings.find((rating) => rating.userId === userInfo._id) ? (
                <button onClick={() => handleUpdateRating(store._id, 5)}>Update Rating</button>
              ) : (
                <button onClick={() => handleRating(store._id, 5)}>Rate Store</button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StoreList;
