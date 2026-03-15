import { useState } from "react";

// ── SearchBar Component ────────────────────────────────────────────────────────
// Props:
//   onSearch({ city, query }) – callback fired when user clicks "Search PGs"
//                               Parent (LandingPage → App) uses this to switch pages
const SearchBar = ({ onSearch }) => {
  const [city,  setCity]  = useState("");
  const [query, setQuery] = useState("");

  // Handle search button click – pass city + query up to parent
  const handleSearch = () => {
    if (onSearch) {
      onSearch({ city, query });  // lift state up to App.jsx
    }
  };

  // Allow pressing Enter key to trigger search as well
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        style={{ boxShadow: "0 8px 40px rgba(37,99,235,0.15)" }}
      >
        {/* City Input */}
        <div className="flex items-center gap-3 px-4 py-3 flex-1 border-b sm:border-b-0 sm:border-r border-gray-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="#2563eb"
            />
          </svg>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter City or Location (e.g., Pune)"
            className="w-full text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        {/* Query / PG Name Input */}
        <div className="flex items-center gap-3 px-4 py-3 flex-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Query or PG Name (e.g., Boys PG near MIT college)"
            className="w-full text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
        </div>

        {/* Search Button – triggers page navigation via onSearch callback */}
        <button
          onClick={handleSearch}
          className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #1a3a6b, #2563eb)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Search PGs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;