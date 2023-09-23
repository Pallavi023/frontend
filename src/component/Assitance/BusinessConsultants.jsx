import React from 'react';

const BusinessConsultants = () => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Business Consultants</h2>
            <p className="text-gray-600 mb-4">
                Our team of experienced business consultants is here to help you with your business needs.
                Contact us for expert advice and guidance on various aspects of your business.
            </p>
            <div className="mt-4">
                <p className="text-gray-800 font-semibold">Contact Information:</p>
                <ul className="list-disc list-inside ml-4 text-gray-700">
                    <li className="mb-2">
                        <span className="text-blue-600">Email:</span> example@example.com
                    </li>
                    <li className="mb-2">
                        <span className="text-blue-600">Phone:</span> +123 456 7890
                    </li>
                    <li className="mb-2">
                        <span className="text-blue-600">Address:</span> 123 Main Street, City, Country
                    </li>
                </ul>
            </div>
            {/* Add any other UI elements and functionality here  vuohjgherge*/}
        </div>
    );
};

export default BusinessConsultants;
