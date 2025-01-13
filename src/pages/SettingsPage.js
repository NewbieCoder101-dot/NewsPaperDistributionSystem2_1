// File: src/pages/SettingsPage.js

import React, { useState } from "react";
import "./../styles/SettingsPage.css";

function SettingsPage() {
  const [email, setEmail] = useState("example@example.com");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default SettingsPage;
