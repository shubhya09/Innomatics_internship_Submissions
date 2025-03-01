import React from 'react';
import './categoryFilter.css';

const CategoryFilter = ({ setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="selectData">
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Asana">Asana</option>
        <option value="Pranayam">Pranayam</option>
        <option value="Dhyana">Dhyana</option>
        <option value="Dharana">Dharana</option>
        <option value="Kriya">Kriya</option>
        <option value="Mantra">Mantra</option>
        <option value="Mudra">Mudra</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
