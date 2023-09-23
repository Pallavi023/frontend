import React, { useState } from "react";
import { Clear } from "@mui/icons-material";

const ProductFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Add your filter options here
  const filterOptions = ["Samsung", "Apple","POCO","Metalic", "Morden","3 Star" ,"4 Star"];

  const handleFilterChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      {filterOptions.map((filter) => (
        <div key={filter} className="flex items-center space-x-2">
          <label
            className={`cursor-pointer ${
              selectedFilters.includes(filter) ? "font-bold" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => handleFilterChange(filter)}
              className="mr-1"
            />
            {filter}
          </label>
          {selectedFilters.includes(filter) && (
            <button
              className=""
              onClick={() => handleFilterChange(filter)}
            >
              <Clear />
            </button>
          )}
        </div>
      ))}
      {selectedFilters.length > 0 && (
        <button className="text-blue-500" onClick={handleClearFilters}>
          Clear Filter
        </button>
      )}
    </div>
  );
};

export default ProductFilter;
