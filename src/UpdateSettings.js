import React, { useState } from 'react';

const UpdateSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'LMS Platform',
    theme: 'Light',
  });

  const handleUpdateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div>
      <h1>Update Settings</h1>
      <h2>System Settings</h2>
      <div>
        <label>Site Name:</label>
        <input
          type="text"
          value={settings.siteName}
          onChange={(e) => handleUpdateSetting('siteName', e.target.value)}
        />
      </div>
      <div>
        <label>Theme:</label>
        <select
          value={settings.theme}
          onChange={(e) => handleUpdateSetting('theme', e.target.value)}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <button onClick={() => alert('Settings updated successfully!')}>
        Save Changes
      </button>
    </div>
  );
};

export default UpdateSettings;
