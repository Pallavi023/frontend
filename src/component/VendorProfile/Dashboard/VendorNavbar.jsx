import React, { useState, useEffect } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import NotificationDropdown from './NotificationDropdown';

const VendorNavbar = ({ setActiveTab }) => {
  const notificationCount = 5; 
  
  const [isActive, setIsActive] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);


  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const notifications = [
    { message: ' Great news! You have a new order. Order #12345 has been placed by a customer.' },
    { message: ' Inventory Alert: The stock for Product X is running low. Only 5 units left.' },
    { message: ' You have received a new product review. A customer has left a 5-star rating and positive feedback for Product Y.' },
    { message: ' A potential customer has sent you an inquiry. Please check your messages for more details.'},
    { message: ' Congratulations! You have made a sale. Order #67890 has been successfully processed.'},
  ];

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (showNotifications) {
        const notificationIconElement = document.querySelector('.notification-icon');
        if (notificationIconElement && !notificationIconElement.contains(event.target)) {
          setShowNotifications(false);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showNotifications]);

  return (
    <div className='md:flex items-center justify-between py-2 md:px-10 px-4 md:h-24 h-20 bg-white border'>
      <div className="font-poppins text-2xl font-medium leading-9 tracking-normal text-left">
        Hi Pallavi!
      </div>

      <div className="flex items-center space-x-8">
        {isActive && (
          <div className="account-settings">
            {/* Add your account settings content here */}
          </div>
        )}

        <div className="relative inline-block">
        <span className={`w-2 h-2 mr-2 bg-gray-500 rounded-full ${notificationCount > 0 ? 'hidden' : ''}`}></span>
          <NotificationsNoneIcon
            className={`w-6 h-6 mr-2 cursor-pointer notification-icon ${showNotifications ? 'text-gray-500' : ''}`}
            onClick={toggleNotifications}
          />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 flex items-center justify-center text-xs text-white bg-red-500 rounded-full">
              {notificationCount}
            </span>
          )}
          {showNotifications && <NotificationDropdown notifications={notifications}  />}
        </div>

        <AccountCircleRoundedIcon onClick={() => setActiveTab('account')} />

        <button
          className={`flex items-center space-x-2 md:space-x-4 border rounded-full p-1 `}
          onClick={toggleActive}
          style={{ borderColor: '#0DA06A' }} // Set border color
        >
          Active {isActive ? <ToggleOffIcon style={{ color: 'gray' }} /> : <ToggleOnIcon style={{ color: '#0DA06A' }} />}
        </button>
      </div>
    </div>
  );
}

export default VendorNavbar;
