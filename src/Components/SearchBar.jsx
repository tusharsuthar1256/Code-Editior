// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleSearch}
        className="p-2 bg-blue-500 text-white rounded-md focus:outline-none"
      >
        Search
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'w-72' : 'w-0'
        }`}
      >
        <input
          type="text"
          placeholder="Type here..."
          className="p-2 border border-gray-300 rounded-md"
          style={{ width: '300px' }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
