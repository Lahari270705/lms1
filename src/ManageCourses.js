import React, { useState } from 'react';
import './ManageCourses.css';

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Basics', instructor: 'Alice', price: 2000 },
    { id: 2, title: 'Java Fundamentals', instructor: 'Bob', price: 2500 },
  ]);
  const [newCourse, setNewCourse] = useState({ title: '', instructor: '', price: '' });
  const [totalAmount, setTotalAmount] = useState(0);
  const [editMode, setEditMode] = useState(null); // Track which course is being edited
  const [editedPrice, setEditedPrice] = useState('');

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.instructor && newCourse.price) {
      const newCourseData = { 
        id: courses.length + 1, 
        ...newCourse, 
        price: parseFloat(newCourse.price) 
      };
      setCourses([...courses, newCourseData]);
      setTotalAmount(totalAmount + newCourseData.price);
      setNewCourse({ title: '', instructor: '', price: '' });
    } else {
      alert('Please provide valid course details');
    }
  };

  const handleRemoveCourse = (id) => {
    const courseToRemove = courses.find(course => course.id === id);
    setCourses(courses.filter((course) => course.id !== id));
    setTotalAmount(totalAmount - courseToRemove.price);
  };

  const handleEditAmount = (id, price) => {
    setEditMode(id); // Enable edit mode for the specific course
    setEditedPrice(price); // Set the current price in the input field
  };

  const handleSaveAmount = (id) => {
    if (editedPrice !== '') {
      setCourses(courses.map(course => 
        course.id === id ? { ...course, price: parseFloat(editedPrice) } : course
      ));
      const updatedTotal = courses.reduce((sum, course) => sum + (course.id === id ? parseFloat(editedPrice) : course.price), 0);
      setTotalAmount(updatedTotal);
      setEditMode(null); // Disable edit mode after saving
    } else {
      alert('Please enter a valid price');
    }
  };

  return (
    <div>
      <h1>Manage Courses</h1>

      <h2>Current Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.instructor} - ₹
            {editMode === course.id ? (
              <input
                type="number"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
                placeholder="Edit Price"
              />
            ) : (
              course.price
            )}
            {' '}
            <button onClick={() => handleRemoveCourse(course.id)}>Remove</button>
            {editMode === course.id ? (
              <button onClick={() => handleSaveAmount(course.id)} className="btn">
                Save
              </button>
            ) : (
              <button onClick={() => handleEditAmount(course.id, course.price)} className="btn">
                Edit Amount
              </button>
            )}
          </li>
        ))}
      </ul>

      <h2>Add New Course</h2>
      <input
        type="text"
        placeholder="Course Title"
        value={newCourse.title}
        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Instructor Name"
        value={newCourse.instructor}
        onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
      />
      <input
        type="number"
        placeholder="Course Price (in ₹)"
        value={newCourse.price}
        onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
      />
      <button onClick={handleAddCourse}>Add Course</button>

      <h3>Total Amount: ₹{totalAmount}</h3>
    </div>
  );
};

export default ManageCourses;
