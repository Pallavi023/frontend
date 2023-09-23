import React from 'react';
import { Link } from 'react-router-dom'


const vendors = [
    {
      id: 1,
      name: 'Example Vendor 1',
      logoUrl: 'https://www.dynamaxoil.com/wp-content/uploads/2018/07/tecdoc-logo-1-2.png',
      address: 'Annpurna, Indore',
      category: 'Fashion',
    },
    {
      id: 2,
      name: 'Example Vendor 2',
      logoUrl: 'https://www.dynamaxoil.com/wp-content/uploads/2018/07/tecdoc-logo-1-2.png',
      address: 'Gopur, Indore',
      category: 'Home Decor',
    },
    {
      id: 3,
      name: 'Example Vendor 3',
      logoUrl: 'https://www.dynamaxoil.com/wp-content/uploads/2018/07/tecdoc-logo-1-2.png',
      address: '123 Vijay Nagar, Indore',
      category: 'Fashion',
    },
    {
      id: 4,
      name: 'Example Vendor 4',
      logoUrl: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
      address: 'Scheme number 136, Indore',
      category: 'Home Decor',
    },
    {
      id: 5,
      name: 'Example Vendor 5',
      logoUrl: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
      address: 'Surydev Nagar, Indore',
      category: 'Fashion',
    },
    {
      id: 6,
      name: 'Example Vendor 6',
      logoUrl: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
      address: 'Gumasta Nagar, Indore',
      category: 'Home Decor',
    },
]


const VendorCard = ({ vendor }) => {
  
  return (
    <div className="bg-white w-full shadow-md rounded-lg p-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <div className="flex justify-center items-center">
      <img
        src={vendor.logoUrl}
        alt={`${vendor.name} logo`}
        className="w-full object-cover h-[150px] shadow-md mb-2"
      />
    </div>
    <h2 className="text-xl font-semibold mt-4">{vendor.name}</h2>
    <p className="text-gray-600 mt-2">{vendor.address}</p>
    <p className="text-blue-500 mt-2">{vendor.category}</p>
  </div>
  
  );
};

const VendorsList = () => {
  return (

    <div className="container mx-auto mt-8 p-5">
        <Link to="/seller-profile">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
        </Link>
    </div>
  );
};

export default VendorsList;
