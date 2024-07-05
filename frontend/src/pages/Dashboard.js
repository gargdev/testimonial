import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardDetails } from '../services/adminService';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { loading, error, dashboardDetails } = useSelector(
    (state) => state.adminDashboard
  );

  useEffect(() => {
    dispatch(getDashboardDetails());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {dashboardDetails && (
        <div>
          <p>Total Users: {dashboardDetails.totalUsers}</p>
          <p>Total Stores: {dashboardDetails.totalStores}</p>
          <p>Total Ratings Submitted: {dashboardDetails.totalRatings}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
