import React, { useState } from 'react';

const CaAssistance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission with the formData state.
    console.log(formData); // Example: Log form data to the console
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">CA Assistance</h2>
      <p className="text-gray-600">
        Information about the CA goes here. Contact us for assistance.
      </p>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input px-4 py-2 rounded-md shadow-sm mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
            required
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input px-4 py-2 rounded-md shadow-sm mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
            required
            placeholder="example@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="form-textarea px-4 py-2 rounded-md shadow-sm mt-1 w-full focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="How can we assist you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
        >
          Book an Appointment
        </button>
      </form>
      {/* Add any other UI elements and functionality here */}
    </div>
  );
};

export default CaAssistance;
