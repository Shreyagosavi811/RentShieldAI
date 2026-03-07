import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center bg-gray-100 p-4 rounded-lg">
      <input
        type="text"
        placeholder="Enter City or Location (e.g., Pune)"
        className="w-full md:w-1/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Query or PG Name (e.g., Boys PG near MIT college)"
        className="w-full md:w-1/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
        Search PGs
      </button>
    </div>
  );
};

export default SearchBar; 