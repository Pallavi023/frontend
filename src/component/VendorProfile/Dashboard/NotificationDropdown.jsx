import React, { useState } from 'react';

const NotificationDropdown = ({ notifications }) => {
  const [seenNotifications, setSeenNotifications] = useState({});

  const markAsSeen = (index) => {
    // Create a copy of seenNotifications and mark the notification as seen by setting its key to true.
    setSeenNotifications((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleNotificationClick = (index) => {
    markAsSeen(index);
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-[30vw] bg-white border rounded-lg shadow-lg">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`p-3 border-b hover:bg-gray-400 cursor-pointer transition-colors duration-300`}
          onClick={() => handleNotificationClick(index)}
        >
          <div className="flex items-center">
            {!seenNotifications[index] && (
              <span
                className="w-2 h-2 mr-2 bg-red-500 rounded-full cursor-pointer"
              ></span>
            )}

            {notification.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationDropdown;
