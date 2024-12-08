import React, { useState } from 'react';
import './TrackProgress.css';

const TrackProgress = () => {
  const [progressData] = useState([
    { course: 'React Basics', progress: 80 },
    { course: 'Advanced Java', progress: 65 },
    { course: 'Database Management', progress: 70 },
  ]);

  return (
    <div className="track-progress">
      <h1>Track Your Progress</h1>
      <h2>Course Progress</h2>
      <ul>
        {progressData.map((item, index) => (
          <li key={index}>
            <strong>{item.course}</strong>: {item.progress}% completed
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackProgress;
