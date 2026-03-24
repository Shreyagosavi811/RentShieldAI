import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/features", label: "Features" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-lg shadow-lg shadow-blue-500/30 flex-shrink-0">
              🛡️
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              RentShield <span className="text-cyan-400">AI</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/login"
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 no-underline"
          >
            Get Started
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-72 z-50 bg-slate-900 border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2.5 no-underline" onClick={() => setMenuOpen(false)}>
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30">
              🛡️
            </div>
            <span className="text-white font-extrabold text-base tracking-tight">
              RentShield <span className="text-cyan-400">AI</span>
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 text-white text-xl flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between text-white/75 hover:text-white hover:bg-white/10 hover:border-white/10 border border-transparent text-base font-medium px-4 py-3.5 rounded-xl transition-all duration-200 no-underline group"
            >
              {link.label}
              <span className="text-white/30 group-hover:text-cyan-400 transition-all duration-200 text-sm">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="px-5 py-6 border-t border-white/10">
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/40 no-underline"
          >
            Get Started →
          </Link>
          <p className="text-center text-white/30 text-xs mt-3">
            Smarter renting starts here
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;