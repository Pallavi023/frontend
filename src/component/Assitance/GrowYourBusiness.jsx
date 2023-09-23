import React from 'react';

const GrowYourBusiness = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Grow Your Business</h2>
            <p className="text-gray-600">
                We offer a range of services and strategies to help your business grow and succeed.
                Our expert team is here to assist you with the following:
            </p>
            <ul className="list-disc list-inside mt-4">
                <li className="mb-2 transition-transform transform hover:scale-105">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg mr-2">1</span>
                    Market research and analysis
                </li>
                <li className="mb-2 transition-transform transform hover:scale-105">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg mr-2">2</span>
                    Digital marketing strategies
                </li>
                <li className="mb-2 transition-transform transform hover:scale-105">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg mr-2">3</span>
                    Product and service expansion plans
                </li>
                <li className="mb-2 transition-transform transform hover:scale-105">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg mr-2">4</span>
                    Business development consulting
                </li>
                {/* Add more services as needed */}
            </ul>
            {/* Add any other UI elements and functionality here */}
        </div>
    );
};

export default GrowYourBusiness;
