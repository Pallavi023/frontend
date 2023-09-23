import React from 'react';

const SortingDropdown = ({ onChange }) => {
  return (
    <div className="sorting-dropdown">
      <select id="sort" onChange={(e) => onChange(e.target.value)}>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
        <option value="newly-added">Newly Added</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
