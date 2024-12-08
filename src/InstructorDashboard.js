import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const navigate = useNavigate();
  
  // Sample data for the courses and assignments
  const [courses, setCourses] = useState([
    'React Basics',
    'Advanced Java',
    'Database Management'
  ]);
  const [assignments, setAssignments] = useState([
    { name: 'React Project', submitted: 12 },
    { name: 'Java Quiz', submitted: 15 },
    { name: 'SQL Report', submitted: 10 }
  ]);
  const [studentProgress, setStudentProgress] = useState([
    { course: 'React Basics', progress: 80 },
    { course: 'Advanced Java', progress: 65 },
    { course: 'Database Management', progress: 70 }
  ]);
  const [announcement, setAnnouncement] = useState('');

  const handleCreateCourse = () => {
    // Redirect to the course creation page (you can implement this page)
    navigate('/create-course'); // Assuming you have a route for creating courses
  };

  const handleCreateAssignment = () => {
    // Redirect to the assignment creation page (you can implement this page)
    navigate('/create-assignment'); // Assuming you have a route for creating assignments
  };

  const handleViewReports = () => {
    // Redirect to the reports page
    navigate('/student-reports'); // Assuming you have a route for student progress reports
  };

  const handlePostAnnouncement = () => {
    // Logic for posting a new announcement (could be a form or modal)
    const newAnnouncement = prompt('Enter your announcement:');
    if (newAnnouncement) {
      setAnnouncement(newAnnouncement); // Add the announcement to the state
    }
  };

  return (
    <div className="instructor-dashboard">
      <header className="dashboard-header">
        <h1>Instructor Dashboard</h1>
        <p>Welcome to your teaching management space!</p>
      </header>

      <section className="dashboard-content">
        {/* Courses Section */}
        <div className="dashboard-card">
          <h2>My Courses</h2>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <button className="btn" onClick={handleCreateCourse}>Create New Course</button>
        </div>

        {/* Assignments Section */}
        <div className="dashboard-card">
          <h2>Manage Assignments</h2>
          <ul>
            {assignments.map((assignment, index) => (
              <li key={index}>
                <strong>{assignment.name}:</strong> {assignment.submitted} students submitted
              </li>
            ))}
          </ul>
          <button className="btn" onClick={handleCreateAssignment}>Create New Assignment</button>
        </div>

        {/* Student Progress Section */}
        <div className="dashboard-card">
          <h2>Student Progress</h2>
          <ul>
            {studentProgress.map((item, index) => (
              <li key={index}>
                <strong>{item.course}:</strong> {item.progress}% students completed
              </li>
            ))}
          </ul>
          <button className="btn" onClick={handleViewReports}>View Detailed Reports</button>
        </div>

        {/* Announcements Section */}
        <div className="dashboard-card">
          <h2>Announcements</h2>
          <p>Next live session for "React Basics" on Dec 15 at 3 PM.</p>
          <p>Grading deadline for "SQL Report" is Dec 20.</p>
          <button className="btn" onClick={handlePostAnnouncement}>Post New Announcement</button>
        </div>
      </section>

      <footer className="dashboard-footer">
        <p>&copy; 2024 LMS Project. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default InstructorDashboard;

