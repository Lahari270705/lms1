import React from 'react';

const StudentReports = () => {
  // Sample data for student progress
  const studentReports = [
    { studentName: 'Alice', course: 'React Basics', progress: 80 },
    { studentName: 'Bob', course: 'Advanced Java', progress: 65 },
    { studentName: 'Charlie', course: 'Database Management', progress: 70 },
  ];

  return (
    <div>
      <h1>Student Progress Reports</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {studentReports.map((report, index) => (
            <tr key={index}>
              <td>{report.studentName}</td>
              <td>{report.course}</td>
              <td>{report.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentReports;
