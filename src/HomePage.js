import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to the LMS</h1>
        <p>Manage and access your online learning content seamlessly</p>
      </header>
      
      <section className="home-content">
        <div className="card">
          <h2>For Students</h2>
          <p>Access your courses, assignments, and grades.</p>
          <Link to="/student" className="btn">Go to Student Dashboard</Link>
        </div>
        
        <div className="card">
          <h2>For Instructors</h2>
          <p>Create and manage your courses, assignments, and track student progress.</p>
          <Link to="/instructor" className="btn">Go to Instructor Dashboard</Link>
        </div>

        <div className="card">
          <h2>For Administrators</h2>
          <p>Manage users, content, and settings of the LMS.</p>
          <Link to="/admin" className="btn">Go to Admin Dashboard</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 LMS Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
