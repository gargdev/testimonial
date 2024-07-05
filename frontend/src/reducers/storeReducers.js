import { STORE_LIST_SUCCESS, STORE_RATE_SUCCESS, STORE_UPDATE_RATING_SUCCESS } from '../constants/storeConstants';

export const storeListReducer = (state = { stores: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_SUCCESS:
      return { stores: action.payload };
    default:
      return state;
  }
};

export const storeRateReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_RATE_SUCCESS:
      return { success: true };
    default:
      return state;
  }
};

export const storeUpdateRatingReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_UPDATE_RATING_SUCCESS:
      return { success: true };
    default:
      return state;
  }
};
