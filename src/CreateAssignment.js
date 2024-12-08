import React, { useState } from 'react';

const CreateAssignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignmentTitle || !assignmentDescription || !dueDate) {
      alert('Please provide all the details');
      return;
    }
    // Handle assignment creation logic here
    console.log('Assignment Created:', { assignmentTitle, assignmentDescription, dueDate });
    // Reset form
    setAssignmentTitle('');
    setAssignmentDescription('');
    setDueDate('');
    alert('Assignment created successfully!');
  };

  return (
    <div>
      <h1>Create New Assignment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Assignment Title:</label>
          <input
            type="text"
            value={assignmentTitle}
            onChange={(e) => setAssignmentTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Assignment Description:</label>
          <textarea
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Assignment</button>
      </form>
    </div>
  );
};

export default CreateAssignment;
