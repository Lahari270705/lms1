import React from 'react';

const Analytics = () => {
  const analyticsData = {
    totalUsers: 500,
    totalCourses: 120,
    dailyActiveUsers: 200,
    popularCourse: 'React Basics',
  };

  return (
    <div>
      <h1>Analytics</h1>
      <h2>Platform Usage</h2>
      <ul>
        <li>Total Users: {analyticsData.totalUsers}</li>
        <li>Total Courses: {analyticsData.totalCourses}</li>
        <li>Daily Active Users: {analyticsData.dailyActiveUsers}</li>
        <li>Most Popular Course: {analyticsData.popularCourse}</li>
      </ul>
      <button onClick={() => alert('Redirecting to detailed analytics...')}>
        View Detailed Analytics
      </button>
    </div>
  );
};

export default Analytics;
