import axios from 'axios';
import { STORE_LIST_SUCCESS, STORE_RATE_SUCCESS, STORE_UPDATE_RATING_SUCCESS } from '../constants/storeConstants';

export const getStores = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/stores');

    dispatch({
      type: STORE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const rateStore = (storeId, rating) => async (dispatch, getState) => {
  try {
    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/stores/${storeId}/rate`, { rating }, config);

    dispatch({
      type: STORE_RATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateStoreRating = (storeId, rating) => async (dispatch, getState) => {
  try {
    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/stores/${storeId}/rate`, { rating }, config);

    dispatch({
      type: STORE_UPDATE_RATING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
