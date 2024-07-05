import axios from 'axios';
import { DASHBOARD_DETAILS_SUCCESS } from '../constants/adminConstants';

export const getDashboardDetails = () => async (dispatch, getState) => {
  try {
    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/admin/dashboard', config);

    dispatch({
      type: DASHBOARD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
