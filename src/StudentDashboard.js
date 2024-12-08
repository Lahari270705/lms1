import React from 'react';
import './StudentDashboard.css';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  // Handlers for button actions
  const handleEnrollCourses = () => {
    navigate('/enroll-courses'); // Redirect to Enroll in Courses page
  };

  const handleSubmitAssignments = () => {
    navigate('/submit-assignments'); // Redirect to Submit Assignments page
  };

  const handleTrackProgress = () => {
    navigate('/track-progress'); // Redirect to Track Progress page
  };

  const handlePayCourseFee = () => {
    navigate('/pay-fee'); // Redirect to Pay Course Fee page
  };

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome to your personalized learning space!</p>
      </header>

      <section className="dashboard-content">
        {/* Courses Section */}
        <div className="dashboard-card">
          <h2>Enroll in Courses</h2>
          <p>
            Explore a variety of courses tailored to your learning needs. Enroll
            in new courses and start learning today!
          </p>
          <button className="btn" onClick={handleEnrollCourses}>
            Enroll in Courses
          </button>
        </div>

        {/* Assignments Section */}
        <div className="dashboard-card">
          <h2>Submit Assignments</h2>
          <p>
            Keep track of your assignments and submit them before their due
            dates. Stay on top of your academic schedule!
          </p>
          <button className="btn" onClick={handleSubmitAssignments}>
            Submit Assignments
          </button>
        </div>

        {/* Progress Section */}
        <div className="dashboard-card">
          <h2>Track Progress</h2>
          <p>
            Monitor your course progress and see how well you're performing in
            your enrolled courses and assignments.
          </p>
          <button className="btn" onClick={handleTrackProgress}>
            Track Progress
          </button>
        </div>

        {/* Pay Course Fee Section */}
        <div className="dashboard-card">
          <h2>Pay Course Fee</h2>
          <p>
            Complete your payment for enrolled courses to gain full access to
            course materials and resources.
          </p>
          <button className="btn" onClick={handlePayCourseFee}>
            Pay Course Fee
          </button>
        </div>

        {/* Announcements Section */}
        <div className="dashboard-card">
          <h2>Announcements</h2>
          <p>New course materials have been added to "Advanced Java."</p>
          <p>Upcoming workshop on "React State Management" on Dec 16.</p>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>&copy; 2024 LMS Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
