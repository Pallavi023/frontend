import React, { useState } from 'react';

const Registrations = () => {
  // Define initial form data with fields
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    // Add more form fields as needed
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission with the formData state.
    console.log(formData); // Example: Log form data to the console
  };

  // Define an array of form fields for rendering
  const formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'John Doe', // Placeholder text
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'example@example.com', // Placeholder text
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'tel',
      placeholder: '123-456-7890', // Placeholder text
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: '123 Main St, City', // Placeholder text
    },
    // Add more form fields as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registrations</h2>
      <p className="text-gray-600">Provide your registration details:</p>
      <form onSubmit={handleFormSubmit} className="mt-4">
        {formFields.map((field, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700 font-bold">
              {field.label}:
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder} // Placeholder text
              className="form-input px-4 py-2 rounded-md shadow-sm mt-1 w-1/2 focus:ring-2 focus:ring-blue-500 border-black border-2 hover:border-blue-500"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit Registration
        </button>
      </form>
      {/* Add any other UI elements and functionality here */}
    </div>
  );
};

export default Registrations;
