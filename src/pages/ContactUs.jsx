import React from 'react';
import { FaEnvelope, FaMapMarkerAlt , FaPhone} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mx-auto flex flex-row items-center">

        <div className="w-[50%] p-8">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <div className="mb-6">
            <p className="text-gray-700">
              If you have any questions or feedback, please feel free to contact us using the form below.
            </p>
          </div>

          <form className="w-full max-w-5xl mx-auto">
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 hover:border-blue-300 hover:shadow-md"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 hover:border-blue-300 hover:shadow-md"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 hover:border-blue-300 hover:shadow-md"
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 hover:border-blue-300 hover:shadow-md"
                id="subject"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 hover:border-blue-300 hover:shadow-md"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            {/* Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
          
          <div className="mt-10">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center">
                <FaEnvelope className="h-6 w-6 text-blue-500 mr-2" />
                <p className="text-gray-700">Email: <a href="mailto:123@gmail.com" className="text-blue-500 hover:underline">123@gmail.com</a></p>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-6 w-6 text-blue-500 mr-2" />
                <p className="text-gray-700">Phone: <a href="tel:1234567890" className="text-blue-500 hover:underline">123-456-7890</a></p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-500 mr-2" />
                <p className="text-gray-700">Address: 123, XYZ Street, Indore</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] relative overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?w=740&t=st=1694424403~exp=1694425003~hmac=a637ed25f0123502ad154340b1d9b4286556293ae55603d8b650cee422d513ef"
            alt="Contact Us"
            className="w-full border-slate-950 h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>
    </div>
  );
};

export default ContactUs;