import { useState } from "react";
import { getLocationSuggestions } from "../api/axios.js";

const SearchBar = ({ onLocationSelect }) => {
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // ── same logic, untouched ─────────────────────────────────────
  const handleChange = async (e) => {
    const value = e.target.value;
    setLocationQuery(value);
    if (value.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const data = await getLocationSuggestions(value);
      setSuggestions(data.slice(0, 5));
    } catch (error) {
      console.error("Suggestion error:", error);
    }
  };

const selectlocation = (place) => {
  setQuery(place.display_name);
  setSuggestions([]);
  onLocationSelect(place.display_name); // triggers search
};

  const handleSearch = () => {
    console.log("Search clicked:", query);
  if (!query.trim()) return;

  onLocationSelect(query);
};
  // ─────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-3xl mx-auto relative">

      {/* ── Search Bar ── */}
      <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">

        {/* Location Input */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b sm:border-b-0 sm:border-r border-gray-200 bg-white hover:bg-blue-50 transition-colors duration-200 group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="#2563eb"
            />
          </svg>
          <input
            type="text"
            value={locationQuery}
            onChange={handleChange}
            placeholder="Enter City or Location (e.g., Pune)"
            className="w-full text-sm font-medium text-gray-700 placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Query Input */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 bg-white hover:bg-blue-50 transition-colors duration-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query or PG Name (e.g., Boys PG near MIT college)"
            className="w-full text-sm font-medium text-gray-700 placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-700 hover:bg-blue-600 active:scale-95 text-white text-sm font-bold px-8 py-4 transition-all duration-200 whitespace-nowrap tracking-wide"
        >
          Search PGs
        </button>
      </div>

      {/* ── Suggestions Dropdown ── */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
          {suggestions.map((place) => (
            <div
              key={place.place_id}
              onMouseDown={() => selectlocation(place)}
              className="flex items-center gap-3 px-5 py-3.5 cursor-pointer hover:bg-blue-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
            >
              {/* Icon */}
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="#2563eb"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-gray-800 truncate">
                  {place.display_name.split(",")[0]}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {place.display_name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;