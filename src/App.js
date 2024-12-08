import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage'; // Import the Login Page
import SignUpPage from './SignUpPage';
import StudentDashboard from './StudentDashboard'; 
import EnrollCourses from './EnrollCourses';
import SubmitAssignments from './SubmitAssignments';
import TrackProgress from './TrackProgress';
import InstructorDashboard from './InstructorDashboard'; 
import CreateCourse from './CreateCourse';
import CreateAssignment from './CreateAssignment';
import StudentReports from './StudentReports';
import PostNewAnnouncement from './PostNewAnnouncement';
import AdminDashboard from './AdminDashboard';
import ManageUsers from './ManageUsers';
import ManageCourses from './ManageCourses';
import UpdateSettings from './UpdateSettings';
import Analytics from './Analytics';

const App = () => {
  return (
    <Router>
      <Routes>
         
      <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Define this route */}
        <Route path="/home" element={<HomePage />} /> {/* Example for post-login */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/enroll-courses" element={<EnrollCourses />} />
        <Route path="/submit-assignments" element={<SubmitAssignments />} />
        <Route path="/track-progress" element={<TrackProgress />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/create-assignment" element={<CreateAssignment />} />
        <Route path="/student-reports" element={<StudentReports />} />
        <Route path="/post-announcement" element={<PostNewAnnouncement />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/update-settings" element={<UpdateSettings />} />
        <Route path="/admin/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
};

export default App;
