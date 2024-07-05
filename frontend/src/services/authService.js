import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/users/login', { email, password });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const register = (name, email, password, address) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/users/register', { name, email, password, address });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
