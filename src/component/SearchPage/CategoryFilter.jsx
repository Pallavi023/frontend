import React, { useState } from 'react';

const CategoryFilter = () => {
  const categories = ['Mobile Accessory', 'Electronics', 'Smartwatch', 'Modern Tech', 'See All'];
  const vendors = ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo'];
  const features = ['Metallic Body', '8 GB RAM', 'Plastic Cover', 'Large Memory'];
  const priceRange = ['Under $50', '$50 - $100', '$100 - $200', 'Above $200'];
  const conditions = ['New', 'Used'];
  const ratings = ['4 stars and above', '3 stars and above', '2 stars and above', '1 star and above'];

  const [selectedVendors, setSelectedVendors] = useState([]);
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);

  const handleVendorChange = (event) => {
    const value = event.target.value;
    if (selectedVendors.includes(value)) {
      setSelectedVendors((prev) => prev.filter((vendor) => vendor !== value));
    } else {
      setSelectedVendors((prev) => [...prev, value]);
    }
  };

  const toggleVendorDropdown = () => {
    setShowVendorDropdown((prev) => !prev);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 mb-4 backdrop-blur-xl w-[240px] h-[912px] top-[207px] left-[132px] border-[1px]">
      <div className="mb-4">
        <p className="font-bold text-lg mb-2">Categories</p>
        <select className="border rounded-md p-2">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg mb-2">Vendors</p>
        <div className="relative">
          <button
            onClick={toggleVendorDropdown}
            className="border rounded-md p-2 w-full text-left"
          >
            {selectedVendors.length > 0
              ? selectedVendors.join(', ')
              : 'Select Vendors'}
          </button>
          {showVendorDropdown && (
            <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
              {vendors.map((vendor, index) => (
                <label key={index} className="block px-4 py-2">
                  <input
                    type="checkbox"
                    value={vendor}
                    checked={selectedVendors.includes(vendor)}
                    onChange={handleVendorChange}
                    className="mr-2"
                  />
                  {vendor}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg mb-2">Features</p>
        <select className="border rounded-md p-2">
          {features.map((feature, index) => (
            <option key={index} value={feature}>
              {feature}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg mb-2">Price Range</p>
        <select className="border rounded-md p-2">
          {priceRange.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <p className="font-bold text-lg mb-2">Condition</p>
        <select className="border rounded-md p-2">
          {conditions.map((condition, index) => (
            <option key={index} value={condition}>
              {condition}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="font-bold text-lg mb-2">Rating</p>
        <select className="border rounded-md p-2">
          {ratings.map((rating, index) => (
            <option key={index} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
