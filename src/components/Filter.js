// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={(e) => setFilter({ ...filter, rating: e.target.value })}
        min="0"
        max="5"
        step="0.1"
      />
    </div>
  );
};

export default Filter;
