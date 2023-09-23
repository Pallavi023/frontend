import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 min-h-screen">
      <div className="container mx-auto py-12 text-white">
        <div className="max-w-md mx-auto p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Terms and Conditions
          </h1>

          <p className="mb-4 text-gray-700">
            Welcome to [Your Creative Company Name]! We're excited to have you
            as a user. Please read these terms and conditions carefully.
          </p>

          {/* Add more content here */}

          <p className="mb-4 text-gray-700">
            By accessing and using our website, you agree to comply with and be
            bound by these terms and conditions.
          </p>

          <Link
            to="/"
            className="text-blue-600 hover:underline font-semibold text-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
