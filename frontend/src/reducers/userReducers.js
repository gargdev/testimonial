import { USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_SUCCESS } from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return { userInfo: action.payload };
    default:
      return state;
  }
};
