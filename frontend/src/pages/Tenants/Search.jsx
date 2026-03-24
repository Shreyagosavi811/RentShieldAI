import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import API from "../../api/axios.js";
import PGCard from "../Landlord/PGCard.jsx";

const sidebarLinks = [
  { icon: "🏠", label: "Dashboard", to: "/tenant/dashboard" },
  { icon: "🔍", label: "Search PGs", to: "/search" },
  { icon: "❤️", label: "Saved Listings", to: "/tenant/saved" },
  { icon: "🤖", label: "AI Analysis", to: "/tenant/analysis" },
  { icon: "👤", label: "Profile", to: "/tenant/profile" },
];

// ── Sidebar ───────────────────────────────────────────────
const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse, user, onLogout }) => {
  const location = useLocation();
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />
      )}
      <aside className={`
        fixed top-0 left-0 w-64 min-h-screen bg-slate-900 border-r border-white/10 z-50 flex flex-col
        transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-auto lg:flex-shrink-0
        ${collapsed ? "lg:w-[68px]" : "lg:w-64"}
      `}>
        <div className={`flex items-center border-b border-white/10 h-16 px-4 ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed && (
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30 flex-shrink-0">🛡️</div>
              <span className="text-white font-extrabold text-base tracking-tight whitespace-nowrap">RentShield <span className="text-cyan-400">AI</span></span>
            </Link>
          )}
          {collapsed && (
            <Link to="/" className="no-underline">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30">🛡️</div>
            </Link>
          )}
          <button onClick={onToggleCollapse} className="hidden lg:flex w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white/50 hover:text-white hover:bg-white/15 items-center justify-center transition-all cursor-pointer text-xs flex-shrink-0">
            {collapsed ? "→" : "←"}
          </button>
          <button onClick={onClose} className="lg:hidden w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white text-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">×</button>
        </div>

        <div className={`py-4 border-b border-white/10 ${collapsed ? "px-2" : "px-4"}`}>
          {collapsed ? (
            <div className="flex justify-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold cursor-pointer" title={user?.name || "Tenant"}>
                {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{user?.name || "Tenant"}</p>
                  <p className="text-white/35 text-xs truncate">{user?.email || "tenant@email.com"}</p>
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">🏠 Tenant Account</span>
              </div>
            </>
          )}
        </div>

        <nav className={`flex-1 py-4 flex flex-col gap-1 overflow-y-auto ${collapsed ? "px-2" : "px-3"}`}>
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} onClick={onClose} title={collapsed ? link.label : ""}
                className={`flex items-center rounded-xl text-sm font-medium transition-all duration-200 no-underline
                  ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}
                  ${isActive ? "bg-gradient-to-r from-blue-600/30 to-blue-500/10 border border-blue-500/20 text-white" : "text-white/50 hover:text-white hover:bg-white/8 border border-transparent"}`}
              >
                <span className="text-base flex-shrink-0">{link.icon}</span>
                {!collapsed && (<>{link.label}{isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />}</>)}
              </Link>
            );
          })}
        </nav>

        <div className={`py-4 border-t border-white/10 ${collapsed ? "px-2" : "px-3"}`}>
          <button onClick={onLogout} title={collapsed ? "Logout" : ""}
            className={`w-full flex items-center rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/15 transition-all duration-200 cursor-pointer
              ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}`}>
            <span className="flex-shrink-0">🚪</span>
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
};

// ── Skeleton loader ───────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-pulse">
    <div className="h-44 bg-white/10" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-white/10 rounded-lg w-3/4" />
      <div className="h-3 bg-white/10 rounded-lg w-1/2" />
      <div className="flex gap-2">
        <div className="h-6 bg-white/10 rounded-lg w-16" />
        <div className="h-6 bg-white/10 rounded-lg w-16" />
      </div>
      <div className="h-9 bg-white/10 rounded-xl w-full mt-2" />
    </div>
  </div>
);

// ── Main Search Page ──────────────────────────────────────
const Search = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searched, setSearched] = useState(false);
  const [pgs, setPgs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const filters = ["All", "Under ₹5k", "₹5k–₹10k", "Above ₹10k", "AC", "Meals", "WiFi"];

  // ── FIX 1: buildQueryParams is now INSIDE component so it
  //    always has access to latest state values ─────────────
  const buildQueryParams = useCallback(() => {
    const params = {};

    if (location.trim()) params.city = location.trim();
    if (query.trim()) params.keyword = query.trim();

    if (activeFilter === "Under ₹5k") {
      params.maxPrice = 5000;
    } else if (activeFilter === "₹5k–₹10k") {
      params.minPrice = 5000;
      params.maxPrice = 10000;
    } else if (activeFilter === "Above ₹10k") {
      params.minPrice = 10000;
    } else if (activeFilter === "AC") {
      params.facilities = "ac";
    } else if (activeFilter === "Meals") {
      params.facilities = "meals";
    } else if (activeFilter === "WiFi") {
      params.facilities = "wifi";
    }

    return params;
  }, [location, query, activeFilter]);

  // ── FIX 2: Single fetchPGs with proper error handling ────
  const fetchPGs = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const params = buildQueryParams();
      const queryString = new URLSearchParams(params).toString();
      const { data } = await API.get(`/pg?${queryString}`);

      setPgs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Search error:", err);
      setError("Failed to load PGs. Please try again.");
      setPgs([]);
    } finally {
      setLoading(false);
    }
  }, [buildQueryParams]);

  // ── FIX 3: Single useEffect — runs on mount + filter change
  useEffect(() => {
    fetchPGs();
  }, [activeFilter]); // only activeFilter triggers auto-fetch

  // ── Search button handler ─────────────────────────────
  const handleSearch = () => {
    setSearched(true);
    fetchPGs();
  };

  const handleClearSearch = () => {
    setQuery("");
    setLocation("");
    setActiveFilter("All");
    setSearched(false);
    setPgs([]);
    // Fetch all PGs again
    setTimeout(() => fetchPGs(), 0);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">

      <Sidebar
        isOpen={sidebarOpen}
        collapsed={collapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        user={user}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-5 h-16 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all cursor-pointer">
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
          </button>

          <div className="hidden lg:block">
            <h1 className="text-white font-bold text-lg">Search PGs</h1>
            <p className="text-white/35 text-xs">Find verified PGs and hostels near you</p>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-sm">🛡️</div>
            <span className="text-white font-extrabold text-sm tracking-tight">RentShield <span className="text-cyan-400">AI</span></span>
          </div>

          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 cursor-pointer">
            {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
          </div>
        </header>

        <main className="flex-1 px-5 py-8 max-w-7xl w-full mx-auto">

          {/* Search box */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">📍</span>
                <input
                  type="text"
                  placeholder="Enter city or area..."
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 text-white placeholder-white/25 text-sm pl-10 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Search PG name..."
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500/60 text-white placeholder-white/25 text-sm pl-10 pr-4 py-3 rounded-xl outline-none transition-all duration-200"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={loading}
                className="sm:w-auto w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer whitespace-nowrap"
              >
                {loading ? "Searching..." : "Search →"}
              </button>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/8">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer
                    ${activeFilter === f
                      ? "bg-blue-500/20 border-blue-500/40 text-blue-400"
                      : "bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* API Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mb-5">
              <span>⚠️</span> {error}
              <button onClick={fetchPGs} className="ml-auto text-red-400 hover:text-red-300 underline cursor-pointer">Retry</button>
            </div>
          )}

          {/* Results header */}
          {!loading && !error && (
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-white font-bold text-base">
                  {searched ? `Results for "${query || location || activeFilter}"` : "Available PGs"}
                </h2>
                <p className="text-white/30 text-xs mt-0.5">
                  {pgs.length} listing{pgs.length !== 1 ? "s" : ""} found · Sorted by relevance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/25 text-xs hidden sm:block">Sort by:</span>
                <select className="bg-white/5 border border-white/10 text-white/50 text-xs px-3 py-2 rounded-xl outline-none cursor-pointer">
                  <option value="relevance" className="bg-slate-900">Relevance</option>
                  <option value="price_low" className="bg-slate-900">Price: Low to High</option>
                  <option value="price_high" className="bg-slate-900">Price: High to Low</option>
                  <option value="newest" className="bg-slate-900">Newest First</option>
                </select>
              </div>
            </div>
          )}

          {/* ── FIX 4: Proper loading / empty / results states ── */}
          {loading ? (
            // Skeleton loader instead of plain text
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : pgs.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {pgs.map((pg) => <PGCard key={pg._id} pg={pg} />)}
            </div>
          ) : (
            // ── FIX 5: Empty state is now always visible when no results
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mx-auto mb-4">🔍</div>
              <p className="text-white/60 font-semibold text-base">
                {searched ? "No PGs found" : "Start searching to find PGs"}
              </p>
              <p className="text-white/30 text-sm mt-1">
                {searched ? "Try a different location, name, or filter" : "Enter a city or PG name above"}
              </p>
              {searched && (
                <button
                  onClick={handleClearSearch}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm transition-colors cursor-pointer"
                >
                  Clear search
                </button>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default Search;