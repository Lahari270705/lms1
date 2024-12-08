import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handleManageUsers = () => navigate('/admin/manage-users');
  const handleManageCourses = () => navigate('/admin/manage-courses');
  const handleUpdateSettings = () => navigate('/admin/update-settings');
  const handleViewAnalytics = () => navigate('/admin/analytics');

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Manage and control the LMS system efficiently!</p>
      </header>

      <section className="dashboard-content">
        {/* User Management Section */}
        <div className="dashboard-card">
          <h2>User Management</h2>
          <ul>
            <li>View all users</li>
            <li>Add new users</li>
            <li>Remove or update user roles</li>
          </ul>
          <button className="btn" onClick={handleManageUsers}>
            Manage Users
          </button>
        </div>

        {/* Course Management Section */}
        <div className="dashboard-card">
          <h2>Course Management</h2>
          <ul>
            <li>View all courses</li>
            <li>Create, update, or delete courses</li>
            <li>Assign instructors to courses</li>
          </ul>
          <button className="btn" onClick={handleManageCourses}>
            Manage Courses
          </button>
        </div>

        {/* Settings Section */}
        <div className="dashboard-card">
          <h2>System Settings</h2>
          <ul>
            <li>Configure system-wide settings</li>
            <li>Manage authentication and security</li>
            <li>Update LMS branding and appearance</li>
          </ul>
          <button className="btn" onClick={handleUpdateSettings}>
            Update Settings
          </button>
        </div>

        {/* Analytics Section */}
        <div className="dashboard-card">
          <h2>Analytics</h2>
          <p>Track platform usage and performance metrics:</p>
          <ul>
            <li>Total number of users: 500</li>
            <li>Total number of courses: 120</li>
            <li>Daily active users: 200</li>
          </ul>
          <button className="btn" onClick={handleViewAnalytics}>
            View Detailed Analytics
          </button>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>&copy; 2024 LMS Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
