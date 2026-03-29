import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const sidebarLinks = [
  { icon: "🏠", label: "Dashboard", to: "/tenant/dashboard" },
  { icon: "🔍", label: "Search PGs", to: "/search" },
  { icon: "❤️", label: "Saved Listings", to: "/tenant/saved" },
  { icon: "🤖", label: "AI Analysis", to: "/tenant/ai-analysis" },
  { icon: "👤", label: "Profile", to: "/tenant/profile" },
];

const quickActions = [
  {
    icon: "🔍",
    title: "Search PGs",
    desc: "Find PGs by location or name",
    to: "/search",
    color: "from-blue-600/30 to-blue-500/10",
    border: "border-blue-500/20",
    badge: "Browse",
  },
  {
    icon: "🤖",
    title: "AI Safety Check",
    desc: "Analyze a PG before booking",
    to: "/tenant/ai-analysis",
    color: "from-cyan-600/30 to-cyan-500/10",
    border: "border-cyan-500/20",
    badge: "AI Powered",
  },
  {
    icon: "❤️",
    title: "Saved Listings",
    desc: "View your bookmarked PGs",
    to: "/tenant/dashboard",
    color: "from-rose-600/30 to-rose-500/10",
    border: "border-rose-500/20",
    badge: "0 Saved",
  },
];

const stats = [
  { icon: "🔍", label: "Searches Done", value: "0" },
  { icon: "❤️", label: "Saved PGs", value: "0" },
  { icon: "🤖", label: "AI Analyses", value: "0" },
  { icon: "✅", label: "Safe Listings", value: "0" },
];

// ── Sidebar ──────────────────────────────────────────────
const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse, user, onLogout }) => {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 w-64 min-h-screen bg-slate-900 border-r border-white/10 z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-auto lg:flex-shrink-0
          ${collapsed ? "lg:w-[68px]" : "lg:w-64"}
        `}
      >
        {/* Logo + collapse */}
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
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white/50 hover:text-white hover:bg-white/15 items-center justify-center transition-all cursor-pointer text-xs flex-shrink-0"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "→" : "←"}
          </button>
          <button
            onClick={onClose}
            className="lg:hidden w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white text-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* User strip */}
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
                <span className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">
                  🏠 Tenant Account
                </span>
              </div>
            </>
          )}
        </div>

        {/* Nav links */}
        <nav className={`flex-1 py-4 flex flex-col gap-1 overflow-y-auto ${collapsed ? "px-2" : "px-3"}`}>
          {sidebarLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.to);
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
                    {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />}
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

// ── Main Dashboard ────────────────────────────────────────
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
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all cursor-pointer"
          >
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
          </button>

          <div className="hidden lg:block">
            <h1 className="text-white font-bold text-lg">Dashboard</h1>
            <p className="text-white/35 text-xs">Find safe, verified PGs with AI</p>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-sm">🛡️</div>
            <span className="text-white font-extrabold text-sm tracking-tight">RentShield <span className="text-cyan-400">AI</span></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/search")}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
            >
              🔍 Search PGs
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 cursor-pointer">
              {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
            </div>
          </div>
        </header>

        {/* Page body */}
        <main className="flex-1 px-5 py-8 max-w-7xl w-full mx-auto">

          {/* Welcome banner */}
          <div className="relative bg-gradient-to-r from-blue-600/20 to-cyan-500/10 border border-white/10 rounded-2xl p-6 mb-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  AI Protection Active
                </div>
                <h2 className="text-white font-extrabold text-xl md:text-2xl tracking-tight">
                  Welcome back, {user?.name?.split(" ")[0] || "there"} 👋
                </h2>
                <p className="text-white/45 text-sm mt-1">
                  Find safe and verified PGs with AI analysis — no scams, no surprises.
                </p>
              </div>
              <button
                onClick={() => navigate("/search")}
                className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer whitespace-nowrap"
              >
                Start Searching →
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-white/15 text-xs">—</span>
                </div>
                <p className="text-white font-bold text-xl">{s.value}</p>
                <p className="text-white/35 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-white font-bold text-base mb-1">Quick Actions</h2>
            <p className="text-white/30 text-xs mb-5">Everything you need as a tenant</p>

            <div className="grid sm:grid-cols-3 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.title}
                  to={action.to}
                  className={`group relative bg-gradient-to-br ${action.color} border ${action.border} rounded-2xl p-5 no-underline hover:scale-[1.02] transition-all duration-200 overflow-hidden`}
                >
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/10 text-white/50 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {action.badge}
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {action.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{action.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{action.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-white/40 group-hover:text-white/70 text-xs transition-colors">
                    Go <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tips banner */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-lg flex-shrink-0">
              💡
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Pro Tip</p>
              <p className="text-white/40 text-xs mt-1 leading-relaxed">
                Always run an AI Safety Check before visiting a PG. It takes under 60 seconds and can flag fake listings, unfair pricing, and risky contracts.
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;