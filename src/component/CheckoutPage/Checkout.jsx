import React, { useRef, useEffect, useState } from 'react';
import AddressCard from './AddressCard';

function Checkout() {
  const [isAgreed, setIsAgreed] = useState(false);
  const imageRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    area: '',
    landmark: '',
    townCity: '',
    country: 'Select Country',
    state: 'Select State',
  });

  const [addressData, setAddressData] = useState([]); // Array to store card data

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({}); // State to manage form validation errors

  const [showAddressCard, setShowAddressCard] = useState(false);

  const handleAddAddress = () => {
    // Validate form data before saving
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      // Form data is valid
      setAddressData([...addressData, formData]);
      setFormData(initialFormData);
      setFormErrors({});
      setShowAddressCard(true); // Show the address card
    } else {
      // Form data is invalid, set validation errors
      setFormErrors(errors);
    }
  };


  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
    
  };

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the corresponding error when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions here, like sending data to a server
    setFormSubmitted(true); // Set the formSubmitted flag to true
  };

  useEffect(() => {
    // Trigger the animation by updating the style after a short delay
    const timer = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.style.transform = 'translateX(0)';
      }
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

   // Validation function to check if form fields are filled out
  const validateFormData = (data) => {
    const errors = {};
    for (const key in data) {
      if (data[key] === '' || data[key] === 'Select Country' || data[key] === 'Select State') {
        errors[key] = `${key} is required`;
      }
    }
    return errors;
  };

  const initialFormData = {
    fullName: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    area: '',
    landmark: '',
    townCity: '',
    country: 'Select Country',
    state: 'Select State',
  };



  return (
    <>
      {/* image and text div */}
      <div className='justify-center items-center w-full flex flex-col' >

        <img
          className='h-[300px]'
          ref={imageRef}
          style={{
            transform: 'translateX(-100%)',
            transition: 'transform 1s ease-in-out',
          }}
          src="https://img.freepik.com/premium-vector/hand-drawn-man-with-shopping-cart-flat-style_1375-17854.jpg?size=626&ext=jpg&ga=GA1.1.584503204.1684751112&semt=ais"
          alt=""
        />
        <p className='font-bold text-3xl p-2 text-[#8459C7] animate-bounce' >Ready to Checkout...</p>
        <p className='font-semibold text-xl p-2'>Fill up the details correctly in order to get your desired product on time.</p>
      </div>

      <div className='grid grid-cols-2 p-5 gap-4'>
        <div className='w-full h-max p-5'>
        <h1 className='font-bold mb-4 text-2xl'>Billing Details</h1>
        {showAddressCard && addressData.length > 0 && (
            <div className='flex flex-row gap-2 mb-4 overflow-x-auto '>
              {addressData.map((address, index) => (
                <div key={index}>
                  <AddressCard
                    formData={address}
                    onSelect={handleAddressSelect}
                    selected={address === selectedAddress}
                  />
                </div>
              ))}
            </div>
          )}
           {!showAddressCard && ( // Only render the checkbox when the form is hidden
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="agreeCheckbox"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                className="mr-2 mb-2"
              />
              <label htmlFor="agreeCheckbox" className='text-md mb-2'>Ship to a different address?</label>
            </div>
          )}
           {isAgreed && (  // Only render the new form when the checkbox is checked
            <form onSubmit={handleSubmit} className='border rounded-lg p-4 '>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.fullName ? 'border-red-500' : ''
                }`}
                placeholder='Full Name'
              />
              {formErrors.fullName && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.fullName}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Mobile Number
              </label>
              <input
                type='text'
                name='mobileNumber'
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.mobileNumber ? 'border-red-500' : ''
                }`}
                placeholder='Mobile Number'
              />
              {formErrors.mobileNumber && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.mobileNumber}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Pincode
              </label>
              <input
                type='text'
                name='pincode'
                value={formData.pincode}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.pincode ? 'border-red-500' : ''
                }`}
                placeholder='Pincode'
              />
              {formErrors.pincode && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.pincode}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Address
              </label>
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.address ? 'border-red-500' : ''
                }`}
                placeholder='Flat/House Number, Building, Company, Apartment'
              />
              {formErrors.address && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.address}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Area/Street/Sector/Village
              </label>
              <input
                type='text'
                name='area'
                value={formData.area}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.area ? 'border-red-500' : ''
                }`}
                placeholder='Area, Street, Sector, Village'
              />
              {formErrors.area && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.area}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Landmark
              </label>
              <input
                type='text'
                name='landmark'
                value={formData.landmark}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.landmark ? 'border-red-500' : ''
                }`}
                placeholder='Landmark'
              />
              {formErrors.landmark && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.landmark}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Town/City
              </label>
              <input
                type='text'
                name='townCity'
                value={formData.townCity}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.townCity ? 'border-red-500' : ''
                }`}
                placeholder='Town/City'
              />
              {formErrors.townCity && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.townCity}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Country
              </label>
              <select
                name='country'
                value={formData.country}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.country ? 'border-red-500' : ''
                }`}
              >
                <option value='Select Country' disabled>
                  Select Country
                </option>
                <option value='Country 1'>Bharat</option>
                <option value='Country 2'>Rusia</option>
                {/* Add more countries here */}
              </select>
              {formErrors.country && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.country}</p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                State
              </label>
              <select
                name='state'
                value={formData.state}
                onChange={handleInputChange}
                className={`border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.state ? 'border-red-500' : ''
                }`}
              >
                <option value='Select State' disabled>
                  Select State
                </option>
                <option value='State 1'>Madhya Pradesh</option>
                <option value='State 2'>Maharashtra</option>
                {/* Add more states here */}
              </select>
              {formErrors.state && (
                <p className='text-red-500 text-sm mt-2'>{formErrors.state}</p>
              )}
            </div>
            <button
              type='submit'
              onClick={handleAddAddress}
              className='mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
            >
              Place Order
            </button>
           
          </form>
           )}
          
        </div>

        <div className='w-full p-5 bg-red-400 h-max border rounded-md'>

        <h1 className='font-bold mb-4 text-2xl'>Your Order</h1>

          <div className='border h-[100px] bg-green-200 p-10'>
            <div className='flex '>
              
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default Checkout;
