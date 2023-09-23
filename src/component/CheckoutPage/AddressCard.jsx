import React, { useState } from 'react';

const AddressCard = ({ formData, onSelect, selected }) => {
  const [isChecked, setIsChecked] = useState(selected);
  
  const [isEditing, setIsEditing] = useState(false); // Add editing state


  const handleEditClick = () => {
    setIsEditing(true); // Enter editing mode
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Exit editing mode
    // Notify the parent component about the updated form data
    onSelect({
      ...formData,
      fullName: editedFullName,
      mobileNumber: editedMobileNumber,
      // Add more fields as needed
    });
  };

  const [editedFullName, setEditedFullName] = useState(formData.fullName);
  const [editedMobileNumber, setEditedMobileNumber] = useState(
    formData.mobileNumber
  );
  const handleCardClick = () => {
    setIsChecked(!isChecked);
    onSelect(formData); // Notify the parent component about the selected address
  };

  return (
    <div
      className={`flex justify-center items-center w-full h-[200px] sm:h-[250px] md:h-[250px] lg:w-[300px] xl:w-[350px] p-10 border rounded-[10px] shadow-lg bg-[#FFFFFF] ${
        isChecked ? 'border-purple-500' : ''
      }`}
      onClick={handleCardClick}
    >
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio text-purple-500"
            checked={isChecked}
            onChange={() => {}}
          />
          <span className="ml-2 font-semibold">{formData.fullName}</span>
        </label>
        <p className='mb-2 text-[#9B9B9B]'>Address: {formData.address}</p>
        <p className='mb-2 text-[#9B9B9B]'>Contact: {formData.mobileNumber}</p>

        <div className='mt-5 pb-2'>
          <button className='text-[#6F1980]'>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
