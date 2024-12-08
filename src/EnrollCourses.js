import React, { useState } from 'react';
import './EnrollCourses.css';

const EnrollCourses = () => {
  const availableCourses = [
    { name: 'React Basics', price: 2000 },
    { name: 'Advanced Java', price: 2500 },
    { name: 'Database Management', price: 1800 },
    { name: 'Python for Data Science', price: 2200 },
  ];

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.some((enrolledCourse) => enrolledCourse.name === course.name)) {
      setEnrolledCourses([...enrolledCourses, course]);
      alert(`${course.name} enrolled successfully! Payment of ₹${course.price} completed.`);
    } else {
      alert(`You are already enrolled in ${course.name}.`);
    }
  };

  return (
    <div className="enroll-courses">
      <h1>Enroll in Courses</h1>
      <h2>Available Courses</h2>
      <ul>
        {availableCourses.map((course, index) => (
          <li key={index}>
            {course.name} - ₹{course.price}{' '}
            <button onClick={() => handleEnroll(course)} className="btn">
              Enroll
            </button>
          </li>
        ))}
      </ul>

      <h2>Your Enrolled Courses</h2>
      <ul>
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course, index) => (
            <li key={index}>
              {course.name} - ₹{course.price}
            </li>
          ))
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </ul>
    </div>
  );
};

export default EnrollCourses;
