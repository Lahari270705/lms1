import React, { useState } from 'react';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseInstructor, setCourseInstructor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName || !courseDescription || !courseInstructor) {
      alert('Please provide all the details');
      return;
    }
    // Handle course creation logic here
    console.log('Course Created:', { courseName, courseDescription, courseInstructor });
    // Reset form
    setCourseName('');
    setCourseDescription('');
    setCourseInstructor('');
    alert('Course created successfully!');
  };

  return (
    <div>
      <h1>Create New Course</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Course Description:</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Instructor Name:</label>
          <input
            type="text"
            value={courseInstructor}
            onChange={(e) => setCourseInstructor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
