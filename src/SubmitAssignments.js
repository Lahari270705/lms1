import React, { useState } from 'react';
import './SubmitAssignments.css';

const SubmitAssignments = () => {
  const [assignments] = useState([
    { title: 'React Project', dueDate: 'Dec 15', submitted: false },
    { title: 'Java Quiz', dueDate: 'Dec 18', submitted: false },
    { title: 'SQL Report', dueDate: 'Dec 20', submitted: false },
  ]);

  const [submittedAssignments, setSubmittedAssignments] = useState([]);

  const handleSubmit = (assignment) => {
    if (!assignment.submitted) {
      setSubmittedAssignments([...submittedAssignments, assignment.title]);
      assignment.submitted = true;
      alert(`${assignment.title} submitted successfully!`);
    } else {
      alert(`You have already submitted ${assignment.title}.`);
    }
  };

  return (
    <div className="submit-assignments">
      <h1>Submit Assignments</h1>
      <h2>Pending Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index}>
            <strong>{assignment.title}</strong> (Due: {assignment.dueDate}){' '}
            {!assignment.submitted && (
              <button
                onClick={() => handleSubmit(assignment)}
                className="btn"
              >
                Submit
              </button>
            )}
          </li>
        ))}
      </ul>
      <h2>Submitted Assignments</h2>
      <ul>
        {submittedAssignments.length > 0 ? (
          submittedAssignments.map((title, index) => <li key={index}>{title}</li>)
        ) : (
          <p>No assignments submitted yet.</p>
        )}
      </ul>
    </div>
  );
};

export default SubmitAssignments;
