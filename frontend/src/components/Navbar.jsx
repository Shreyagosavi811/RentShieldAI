import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1a3a6b, #2563eb)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
                fill="white"
                opacity="0.9"
              />
              <circle cx="12" cy="13" r="3" fill="#f97316" />
              <path
                d="M12 10v-3"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span
            className="text-xl font-bold"
            style={{ color: "#1a3a6b", letterSpacing: "-0.5px" }}
          >
            RentShield <span style={{ color: "#2563eb" }}>AI</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium transition-colors duration-200 hover:text-blue-600"
              style={{ color: "#374151" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">

          <Link to="/signup">
            <button
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1a3a6b, #2563eb)",
                boxShadow: "0 4px 14px rgba(37,99,235,0.35)"
              }}
            >
              Sign Up
            </button>
          </Link>

        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["Features", "About Us", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-700">
              {item}
            </a>
          ))}

          <Link to="/signup">
            <button
              className="mt-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white w-full"
              style={{
                background: "linear-gradient(135deg, #1a3a6b, #2563eb)"
              }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;