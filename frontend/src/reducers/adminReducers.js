import { DASHBOARD_DETAILS_SUCCESS } from '../constants/adminConstants';

export const adminDashboardReducer = (state = { dashboardDetails: {} }, action) => {
  switch (action.type) {
    case DASHBOARD_DETAILS_SUCCESS:
      return { dashboardDetails: action.payload };
    default:
      return state;
  }
};
