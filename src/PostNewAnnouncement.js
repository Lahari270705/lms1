import React, { useState } from 'react';

const PostNewAnnouncement = () => {
  const [announcementTitle, setAnnouncementTitle] = useState('');
  const [announcementMessage, setAnnouncementMessage] = useState('');
  const [announcementDate, setAnnouncementDate] = useState('');
  const [announcements, setAnnouncements] = useState([]); // State to hold all announcements

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!announcementTitle || !announcementMessage || !announcementDate) {
      alert('Please provide all the details for the announcement');
      return;
    }

    // Prepare the announcement data
    const newAnnouncement = {
      title: announcementTitle,
      message: announcementMessage,
      date: announcementDate,
    };

    try {
      // Simulate posting to a backend API
      const response = await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (response.ok) {
        // Update announcements list to include the new one
        setAnnouncements((prev) => [newAnnouncement, ...prev].slice(0, 4)); // Keep only the latest 4
        setAnnouncementTitle('');
        setAnnouncementMessage('');
        setAnnouncementDate('');
        alert('Announcement posted successfully!');
      } else {
        alert('There was an issue posting the announcement');
      }
    } catch (error) {
      console.error('Error posting announcement:', error);
      alert('Error posting announcement. Please try again.');
    }
  };

  return (
    <div>
      <h1>Post New Announcement</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Announcement Title:</label>
          <input
            type="text"
            value={announcementTitle}
            onChange={(e) => setAnnouncementTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Announcement Message:</label>
          <textarea
            value={announcementMessage}
            onChange={(e) => setAnnouncementMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Announcement Date:</label>
          <input
            type="date"
            value={announcementDate}
            onChange={(e) => setAnnouncementDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Post Announcement</button>
      </form>

      <h2>Recent Announcements</h2>
      <ul>
        {announcements.length > 0 ? (
          announcements.map((announcement, index) => (
            <li key={index}>
              <h3>{announcement.title}</h3>
              <p>{announcement.message}</p>
              <p><strong>Date:</strong> {announcement.date}</p>
            </li>
          ))
        ) : (
          <p>No announcements yet.</p>
        )}
      </ul>
    </div>
  );
};

export default PostNewAnnouncement;
