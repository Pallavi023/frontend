import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';

const AccountDetailsEdit = () => {
  const [activeTab, setActiveTab] = useState('general');

  // General details state
  const [businessName, setBusinessName] = useState('FAMILY SUPERMARKET');
  const [email, setEmail] = useState('example@example.com');
  const [mobile, setMobile] = useState('1234567890');
  const [generalEditMode, setGeneralEditMode] = useState(false);

  // Account details state
  const [panNumber, setPanNumber] = useState('ABCD1234');
  const [fassaiNumber, setFassaiNumber] = useState('1234567890');
  const [accountHolderName, setAccountHolderName] = useState('John Doe');
  const [gstNumber, setGstNumber] = useState('GST1234');
  const [accountNumber, setAccountNumber] = useState('9876543210');
  const [ifscCode, setIfscCode] = useState('ABCD1234567');
  const [accountEditMode, setAccountEditMode] = useState(false);

  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setUploadedImageUrl(imageUrl);
    }
  };



  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGeneralEditClick = () => {
    setGeneralEditMode(true);

  };

  const handleGeneralSaveClick = () => {
    // Update data in backend or wherever necessary

    // Close the edit mode
    setGeneralEditMode(false);

  };

  const handleAccountEditClick = () => {
    setAccountEditMode(true);
  };

  const handleAccountSaveClick = () => {
    // Update data in backend or wherever necessary

    // Close the edit mode
    setAccountEditMode(false);

  };


  const [selectedImage, setSelectedImage] = useState(null);





  return (
    <div className="top break-words">
      <div className="upperbox flex flex-wrap gap-6 border-b-2 ">
        <div className="upperbox-left flex-col md:flex md:items-center md:space-x-4">
          {uploadedImageUrl ? (
            <img
              src={uploadedImageUrl}
              alt="Logo"
              className="rounded-full h-48 w-96 md:h-64 md:w-64"
            />
          ) : (
            <img
              src="https://img.freepik.com/free-vector/supermarket-logo-with-groceries_23-2148470294.jpg?w=740&t=st=1693327156~exp=1693327756~hmac=69bdf1935df50291b9689d42ff7a4bfbb722ae8c2093d51d0dc0cf4cbef1ee81"
              alt="Logo"
              className="rounded-full h-48 w-96 md:h-64 md:w-64"
            />
          )}
          <div className="md:ml-4 mb-6">
            <div className="flex flex-wrap break-words bg-white text-black px-2 py-1 rounded-md font-semibold ml-48">
              <label className="hover:scale-110 transition-all duration-200 flex justify-center items-center">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <FaImage className="ml-2" />
              </label>
            </div>
          </div>
        </div>
        <div className="upperbox-right md:ml-12 mt-28 gap-4">
          <h1 className="font-bold text-4xl">{businessName}</h1>
          <p className="text-gray-500 font-semibold text-lg">Packed Food</p>
        </div>

      </div>

      <div className="tab-switching mt-4 md:mt-12 ml-4 md:ml-12">
        <div className="flex">
          <button
            onClick={() => handleTabChange('general')}
            className={`${activeTab === 'general'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
              } px-6 py-2 rounded-md mr-2 md:mr-4`}
          >
            General Details
          </button>
          <button
            onClick={() => handleTabChange('account')}
            className={`${activeTab === 'account'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
              } px-6 py-2 rounded-md`}
          >
            Account Details
          </button>
        </div>
        <div className="mt-4">
          {/* General Details Tab */}
          {activeTab === 'general' && (
            <div className="flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row gap-x-6 mt-10">
                <label className="font-semibold">Business Name</label>
                {generalEditMode ? (
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={businessName}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleGeneralEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">Email Address</label>
                {generalEditMode ? (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={email}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleGeneralEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">Mobile Number</label>
                {generalEditMode ? (
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={mobile}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleGeneralEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              {generalEditMode && (
                <div className="mt-4 md:mt-12 ml-4 md:ml-12">
                  <button
                    className="bg-purple-400 hover:bg-purple-600 text-white text-xl px-6 py-2 rounded-lg shadow-lg transition-all duration-200"
                    onClick={handleGeneralSaveClick}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Account Details Tab */}
          {activeTab === 'account' && (
            <div className="account-details flex flex-col space-y-8">
              <div className="flex flex-col md:flex-row gap-x-6 mt-10">
                <label className="font-semibold">PAN Number</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={panNumber}
                    onChange={(e) => setPanNumber(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                 />
                 ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={panNumber}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">Fassai Number</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={fassaiNumber}
                    onChange={(e) => setFassaiNumber(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={fassaiNumber}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">Account Holder Name</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={accountHolderName}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">GST Number</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={gstNumber}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">Account Number</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={accountNumber}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-x-6">
                <label className="font-semibold">IFSC Code</label>
                {accountEditMode ? (
                  <input
                    type="text"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    className="border border-gray-500 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-lg"
                  />
                ) : (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={ifscCode}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 bg-gray-100 w-full md:w-64 shadow-lg"
                    />
                    <button
                      className="text-blue-500 ml-2"
                      onClick={handleAccountEditClick}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
              {accountEditMode && (
                <div className="mt-4 md:mt-12 ml-4 md:ml-12">
                  <button
                    className="bg-purple-400 hover:bg-purple-600 text-white text-xl px-6 py-2 rounded-lg shadow-lg transition-all duration-200"
                    onClick={handleAccountSaveClick}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsEdit;
