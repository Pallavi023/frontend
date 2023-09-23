import React, { useState } from 'react';
import Card from '@mui/material/Card';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { BiSort } from 'react-icons/bi';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

// Create a custom Modal component
function StoreStatusModal({ isActive, onClose, onStatusChange }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleConfirm = () => {
    // Perform the store status change logic here
    onStatusChange(startDate, endDate, !isActive);
    onClose();
  };

  return (
    <div className="fixed inset-x-0 top-20 z-50 flex items-center justify-center">
    <div className="modal-content p-6 bg-white rounded-lg shadow-md max-w-md w-full">
      <span className="modal-close absolute top-2 right-2 text-gray-600 cursor-pointer text-2xl" onClick={onClose}>&times;</span>
      <h2 className="text-2xl font-semibold mb-4">{isActive ? 'Deactivate Store' : 'Activate Store'}</h2>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">Start Date</label>
        <input
          type="date"
          className="form-input block w-full mt-1"
          placeholder="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm font-medium">End Date</label>
        <input
          type="date"
          className="form-input block w-full mt-1"
          placeholder="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <button
        onClick={handleConfirm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-full"
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  </div>
  
  
  
  );
}

export default function VendorSales() {
  
  const [cost, setCost] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleClick = () => {
    setShowModal(true);
  };

  const handleStatusChange = (startDate, endDate, newStatus) => {
    // Perform the store status change logic here
    // You can use the startDate, endDate, and newStatus values
    // to update the store status
    setIsActive(newStatus);
  };


  const handleCostChange = (event) => {
    setCost(event.target.value);
  };
  
 

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <> 
      <div className=''>
      {showModal && (
        <StoreStatusModal
          isActive={isActive}
          onClose={() => setShowModal(false)}
          onStatusChange={handleStatusChange}
        />
      )}
      <h1 className="mt-3 mb-3 ml-6">Sales</h1>
      <div className="flex flex-col md:flex-row gap-5 p-5">
          {/* Card 1 */}
          <Card
            variant="outlined"
            orientation="horizontal"
            className="w-full md:w-1/3 rounded-xl"
            sx={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
              borderRadius: '1rem', // Rounded corners
              '&:hover': {
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
                borderColor: 'neutral.outlinedHoverBorder',
              },
            }}
          >
            
<div>
              <ManageAccountsIcon className='m-2'/>
              <div className="flex justify-center items-center flex-col mb-5">
                <div className="p-4">
                  <p className="text-2xl font-bold text-[#737587]"> {cost}</p>
                </div>
                <p className="font-bold text-2xl">Product Sold</p>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card
            variant="outlined"
            orientation="horizontal"
            className="w-full md:w-1/3 rounded-xl"
            sx={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
              borderRadius: '1rem', // Rounded corners
              '&:hover': {
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
                borderColor: 'neutral.outlinedHoverBorder',
              },
            }}
          >
            <div>
              <BiSort className="text-2xl m-2" />
              <div className="flex justify-center items-center flex-col">
                <div className="p-4">
                  <p className="text-2xl font-bold text-[#737587]"> {cost}</p>
                </div>
                <p className="font-bold text-2xl">Total Orders</p>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card
            variant="outlined"
            orientation="horizontal"
            className="w-full md:w-1/3 rounded-xl"
            sx={{
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
              borderRadius: '1rem', // Rounded corners
              '&:hover': {
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)', // Shadow on hover
                borderColor: 'neutral.outlinedHoverBorder',
              },
            }}
          >
            <div className="flex flex-col justify-center items-center mt-7">
            <div className="p-4">
              <p className="text-2xl font-bold text-[#737587]">Store Status</p>
            </div>
            <button
              className={`flex items-center space-x-4 border rounded-full p-1 mb-2`}
              onClick={handleToggleClick}
              style={{ borderColor: '#0DA06A' }}
            >
             Active Store {isActive ? (
                <ToggleOffIcon style={{ color: 'gray' }} />
              ) : (
                <ToggleOnIcon style={{ color: '#0DA06A' }} />
              )}
            </button>
          </div>
       
          </Card>
        </div>
      </div>
      
    </>
  );
}
