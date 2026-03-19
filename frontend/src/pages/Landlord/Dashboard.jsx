import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PGCard from "./PGCard";

const sidebarLinks = [
  { icon: "🏠", label: "My Listings", to: "/landlord" },
  { icon: "➕", label: "Add PG", to: "/landlord/add" },
  { icon: "👤", label: "Profile", to: "/landlord/profile" },
  { icon: "✏️", label: "Edit Profile", to: "/landlord/edit-profile" },
];

const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse, user, onLogout }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-64 min-h-screen bg-slate-900 border-r border-white/10 z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-auto lg:flex-shrink-0
          ${collapsed ? "lg:w-[68px]" : "lg:w-64"}

        `}
      >
        {/* Logo + collapse toggle */}
        <div className={`flex items-center border-b border-white/10 h-16 px-4 ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed && (
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30 flex-shrink-0">
                🛡️
              </div>
              <span className="text-white font-extrabold text-base tracking-tight whitespace-nowrap">
                RentShield <span className="text-cyan-400">AI</span>
              </span>
            </Link>
          )}

          {collapsed && (
            <Link to="/" className="no-underline">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30">
                🛡️
              </div>
            </Link>
          )}

          {/* Desktop collapse toggle */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white/50 hover:text-white hover:bg-white/15 items-center justify-center transition-all cursor-pointer text-xs flex-shrink-0"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "→" : "←"}
          </button>

          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white text-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* User profile strip */}
        <div className={`py-4 border-b border-white/10 ${collapsed ? "px-2" : "px-4"}`}>
          {collapsed ? (
            <div className="flex justify-center">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold cursor-pointer" title={user?.name || "Landlord"}>
                {user?.name ? user.name.charAt(0).toUpperCase() : "L"}
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "L"}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">
                    {user?.name || "Landlord"}
                  </p>
                  <p className="text-white/35 text-xs truncate">
                    {user?.email || "landlord@email.com"}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <span className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                  🏢 Landlord Account
                </span>
              </div>
            </>
          )}
        </div>

        {/* Nav links */}
        <nav className={`flex-1 py-4 flex flex-col gap-1 overflow-y-auto ${collapsed ? "px-2" : "px-3"}`}>
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                title={collapsed ? link.label : ""}
                className={`flex items-center rounded-xl text-sm font-medium transition-all duration-200 no-underline
                  ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}
                  ${isActive
                    ? "bg-gradient-to-r from-blue-600/30 to-blue-500/10 border border-blue-500/20 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/8 border border-transparent"
                  }`}
              >
                <span className="text-base flex-shrink-0">{link.icon}</span>
                {!collapsed && (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className={`py-4 border-t border-white/10 ${collapsed ? "px-2" : "px-3"}`}>
          <button
            onClick={onLogout}
            title={collapsed ? "Logout" : ""}
            className={`w-full flex items-center rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/15 transition-all duration-200 cursor-pointer
              ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}`}
          >
            <span className="flex-shrink-0">🚪</span>
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
};

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        collapsed={collapsed}
        onClose={() => setSidebarOpen(false)}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-5 h-16 flex items-center justify-between">
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all cursor-pointer"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
          </button>

          {/* Page title */}
          <div className="hidden lg:block">
            <h1 className="text-white font-bold text-lg">My Listings</h1>
            <p className="text-white/35 text-xs">Manage your PGs and hostels</p>
          </div>

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-sm">
              🛡️
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight">
              RentShield <span className="text-cyan-400">AI</span>
            </span>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/landlord/add"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 no-underline"
            >
              <span>＋</span> Add PG
            </Link>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 cursor-pointer">
              {user?.name ? user.name.charAt(0).toUpperCase() : "L"}
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 px-5 py-8 max-w-7xl w-full mx-auto">

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Listings", value: "2", icon: "🏠" },
              { label: "Active", value: "2", icon: "✅" },
              { label: "Total Views", value: "128", icon: "👁️" },
              { label: "Inquiries", value: "14", icon: "💬" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{stat.icon}</span>
                  <span className="text-white/20 text-xs">↑</span>
                </div>
                <p className="text-white font-bold text-xl">{stat.value}</p>
                <p className="text-white/35 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Listings header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-white font-bold text-base">Listed PGs</h2>
              <p className="text-white/30 text-xs mt-0.5">2 active listings</p>
            </div>
            <Link
              to="/landlord/add"
              className="sm:hidden flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold px-3 py-2 rounded-xl no-underline"
            >
              ＋ Add
            </Link>
          </div>

          {/* PG Cards grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <PGCard isOwner />
            <PGCard isOwner />

            {/* Add new card */}
            <Link
              to="/landlord/add"
              className="group border-2 border-dashed border-white/10 hover:border-blue-500/40 rounded-2xl flex flex-col items-center justify-center gap-3 py-12 transition-all duration-200 no-underline hover:bg-blue-500/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-blue-500/15 border border-white/10 group-hover:border-blue-500/30 flex items-center justify-center text-2xl transition-all duration-200">
                ➕
              </div>
              <div className="text-center">
                <p className="text-white/40 group-hover:text-white/70 text-sm font-medium transition-colors">
                  Add New PG
                </p>
                <p className="text-white/20 text-xs mt-0.5">
                  List your property
                </p>
              </div>
            </Link>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;