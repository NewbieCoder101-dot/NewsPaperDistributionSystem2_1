// File: src/components/NotificationBell.js

import React, { useState } from "react";
import "./../styles/NotificationBell.css";

function NotificationBell() {
  const [notifications, setNotifications] = useState([
    "New ticket raised by John Doe",
    "Report for today is generated",
  ]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="notification-bell">
      <button onClick={toggleDropdown}>
        🔔 {notifications.length}
      </button>
      {isDropdownVisible && (
        <div className="dropdown">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                {notification}
              </div>
            ))
          ) : (
            <div className="notification-item">No new notifications</div>
          )}
        </div>
      )}
    </div>
  );
}

export default NotificationBell;
