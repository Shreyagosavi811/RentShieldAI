import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import API from "../../api/axios.js";

import axios from "axios";



const sidebarLinks = [
  { icon: "🏠", label: "Dashboard", to: "/tenant/dashboard" },
  { icon: "🔍", label: "Search PGs", to: "/search" },
  { icon: "❤️", label: "Saved Listings", to: "/tenant/saved" },
  { icon: "🤖", label: "AI Analysis", to: "/tenant/analysis" },
  { icon: "👤", label: "Profile", to: "/tenant/profile" },
];

// facility icon map
const facilityIcons = {
  wifi: "📶", ac: "❄️", meals: "🍽️", laundry: "🧺",
  cctv: "📷", parking: "🚗", gym: "💪", tv: "📺",
  "hot water": "🚿", "power backup": "⚡",
};

const getFacilityIcon = (name) =>
  facilityIcons[name?.toLowerCase()] || "✅";

// ── Sidebar ───────────────────────────────────────────────
// const Sidebar = ({ isOpen, collapsed, onClose, onToggleCollapse, user, onLogout }) => {
//   const location = useLocation();
//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />
//       )}
//       <aside className={`
//         fixed top-0 left-0 w-64 min-h-screen bg-slate-900 border-r border-white/10 z-50 flex flex-col
//         transition-all duration-300 ease-in-out
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:z-auto lg:flex-shrink-0
//         ${collapsed ? "lg:w-[68px]" : "lg:w-64"}
//       `}>
//         <div className={`flex items-center border-b border-white/10 h-16 px-4 ${collapsed ? "justify-center" : "justify-between"}`}>
//           {!collapsed && (
//             <Link to="/" className="flex items-center gap-2.5 no-underline">
//               <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30 flex-shrink-0">🛡️</div>
//               <span className="text-white font-extrabold text-base tracking-tight whitespace-nowrap">RentShield <span className="text-cyan-400">AI</span></span>
//             </Link>
//           )}
//           {collapsed && (
//             <Link to="/" className="no-underline">
//               <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-base shadow-lg shadow-blue-500/30">🛡️</div>
//             </Link>
//           )}
//           <button onClick={onToggleCollapse} className="hidden lg:flex w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white/50 hover:text-white hover:bg-white/15 items-center justify-center transition-all cursor-pointer text-xs flex-shrink-0">
//             {collapsed ? "→" : "←"}
//           </button>
//           <button onClick={onClose} className="lg:hidden w-7 h-7 rounded-lg bg-white/10 border border-white/10 text-white text-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">×</button>
//         </div>

//         <div className={`py-4 border-b border-white/10 ${collapsed ? "px-2" : "px-4"}`}>
//           {collapsed ? (
//             <div className="flex justify-center">
//               <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold cursor-pointer" title={user?.name || "Tenant"}>
//                 {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
//                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
//                   {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
//                 </div>
//                 <div className="min-w-0">
//                   <p className="text-white text-sm font-semibold truncate">{user?.name || "Tenant"}</p>
//                   <p className="text-white/35 text-xs truncate">{user?.email || "tenant@email.com"}</p>
//                 </div>
//               </div>
//               <div className="mt-2 flex justify-center">
//                 <span className="inline-flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">🏠 Tenant Account</span>
//               </div>
//             </>
//           )}
//         </div>

//         <nav className={`flex-1 py-4 flex flex-col gap-1 overflow-y-auto ${collapsed ? "px-2" : "px-3"}`}>
//           {sidebarLinks.map((link) => {
//             const isActive = location.pathname === link.to;
//             return (
//               <Link key={link.to} to={link.to} onClick={onClose} title={collapsed ? link.label : ""}
//                 className={`flex items-center rounded-xl text-sm font-medium transition-all duration-200 no-underline
//                   ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}
//                   ${isActive ? "bg-gradient-to-r from-blue-600/30 to-blue-500/10 border border-blue-500/20 text-white" : "text-white/50 hover:text-white hover:bg-white/8 border border-transparent"}`}
//               >
//                 <span className="text-base flex-shrink-0">{link.icon}</span>
//                 {!collapsed && (<>{link.label}{isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />}</>)}
//               </Link>
//             );
//           })}
//         </nav>

//         <div className={`py-4 border-t border-white/10 ${collapsed ? "px-2" : "px-3"}`}>
//           <button onClick={onLogout} title={collapsed ? "Logout" : ""}
//             className={`w-full flex items-center rounded-xl text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/15 transition-all duration-200 cursor-pointer
//               ${collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}`}>
//             <span className="flex-shrink-0">🚪</span>
//             {!collapsed && "Logout"}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// ── Skeleton loader ───────────────────────────────────────
const Skeleton = () => (
  <div className="animate-pulse space-y-5">
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <div className="h-72 bg-white/10" />
      <div className="flex gap-2 p-3">
        {[1, 2, 3, 4].map(i => <div key={i} className="flex-1 h-16 bg-white/10 rounded-xl" />)}
      </div>
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
      <div className="h-6 bg-white/10 rounded-lg w-1/2" />
      <div className="h-4 bg-white/10 rounded-lg w-1/3" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-16 bg-white/10 rounded-xl" />)}
      </div>
    </div>
  </div>
);

// ── AI Analysis Panel ─────────────────────────────────────
const AIPanel = ({ pg }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

 const handleAnalyze = async () => {

  try {
    // setAnalyzing(true);

    // const pgData = {
    //   name: pg.title,
    //   image_count: pg.images,
    //   // IMPORTANT FIX 👇
    //   location: typeof pg.address === "string"
    //     ? pg.address
    //     : pg.location?.address,
    //   roomType: pg.roomType,
    //   facilities: pg.facilities,
    //   description: pg.description,
    //   rules:pg.rules,
    //   rent: pg.rent,
    //   deposit:pg.deposit,
    //   reviews: pg.reviews || []
    // };

    // console.log("Sending to AI:", pgData);
    // const response = await axios.post(
    //   "http://localhost:5000/api/ai/analyze",
    //   pgData
    // );
    // // console.log("AI Analysis Result:", response.data);
    // setResult(response.data);
    
    navigate("/tenant/ai-analysis"); //{ state: response.data }

  } catch (error) {
    console.error(error);
    
  }finally{
    setAnalyzing(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-blue-600/15 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-5">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-lg">🤖</div>
        <div>
          <p className="text-white font-semibold text-sm">AI Safety Analysis</p>
          <p className="text-white/35 text-xs">Powered by RentShield AI</p>
        </div>
      </div>

      {!result ? (
        <>
          <p className="text-white/45 text-xs leading-relaxed mb-4">
            Our AI will check pricing fairness, listing authenticity, landlord reputation, and flag any red flags.
          </p>
          <button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            {analyzing ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing...
              </span>
            ) : "Analyze with AI →"}
          </button>
        </>
      ) : result.error ? (
        <div className="text-red-400 text-xs text-center py-3">
          Analysis failed. <button onClick={() => setResult(null)} className="underline cursor-pointer">Try again</button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Score */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
            <p className="text-white/35 text-xs mb-1">Safety Score</p>
            <p className={`text-4xl font-extrabold ${result.score >= 80 ? "text-green-400" : result.score >= 60 ? "text-amber-400" : "text-red-400"}`}>
              {result.score}
            </p>
            <p className={`text-xs mt-0.5 ${result.score >= 80 ? "text-green-400" : "text-amber-400"}`}>
              {result.score >= 80 ? "✓ Safe to Proceed" : "⚠ Proceed with Caution"}
            </p>
          </div>

          {/* Checks */}
          {result.checks.map((check) => (
            <div key={check.label} className="flex items-center justify-between gap-2 bg-white/5 border border-white/8 rounded-xl px-3 py-2.5">
              <div>
                <p className="text-white/70 text-xs font-medium">{check.label}</p>
                <p className="text-white/30 text-xs">{check.note}</p>
              </div>
              <span className={`text-base flex-shrink-0 ${check.status === "pass" ? "text-green-400" : "text-amber-400"}`}>
                {check.status === "pass" ? "✓" : "⚠"}
              </span>
            </div>
          ))}

          <button
            onClick={() => setResult(null)}
            className="w-full text-white/30 hover:text-white/60 text-xs py-2 transition-colors cursor-pointer"
          >
            Re-analyze
          </button>
        </div>
      )}
    </div>
  );
};

// ── Main PGDetails Page ───────────────────────────────────
const PGDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

  // ── Fetch PG by ID ─────────────────────────────────────
  useEffect(() => {
    const fetchPG = async () => {
      try {
        setLoading(true);
        setError("");
        const { data } = await API.get(`/pg/${id}`);
        setPg(data);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "This PG listing was not found or has been removed."
            : "Failed to load PG details. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPG();
  }, [id]);

  // ── Helpers ────────────────────────────────────────────
  const images = pg?.images || [];
  // console.log("PG Images:", images); // Debug log to check images array

  const formatPrice = (price) =>
    price ? `₹${Number(price).toLocaleString("en-IN")}` : "N/A";

  const facilities = Array.isArray(pg?.facilities)
    ? pg.facilities
    : typeof pg?.facilities === "string"
      ? pg.facilities.split(",").map(f => f.trim())
      : [];

  return (
    <div className="min-h-screen bg-slate-950 flex">



      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer text-sm"
            >
              ←
            </button>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-sm line-clamp-1">
                {loading ? "Loading..." : pg?.title || "PG Details"}
              </h1>
              <p className="text-white/30 text-xs">Full property information</p>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all cursor-pointer">
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
            <span className="block w-5 h-0.5 bg-white rounded-full" />
          </button>

          <div className="flex items-center gap-2">
            {/* Save button */}
            <button
              onClick={() => setSaved(!saved)}
              className={`w-8 h-8 rounded-xl border flex items-center justify-center transition-all cursor-pointer text-sm
                ${saved ? "bg-rose-500/20 border-rose-500/30 text-rose-400" : "bg-white/10 border-white/10 text-white/40 hover:text-white"}`}
              title={saved ? "Saved" : "Save listing"}
            >
              {saved ? "❤️" : "🤍"}
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user?.name ? user.name.charAt(0).toUpperCase() : "T"}
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-8 max-w-6xl w-full mx-auto">

          {/* Loading state */}
          {loading && <Skeleton />}

          {/* Error state */}
          {!loading && error && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mx-auto mb-4">😕</div>
              <p className="text-white/60 font-semibold text-base">{error}</p>
              <div className="flex items-center justify-center gap-3 mt-5">
                <button
                  onClick={() => navigate(-1)}
                  className="text-white/40 hover:text-white text-sm border border-white/10 hover:border-white/20 px-4 py-2 rounded-xl transition-all cursor-pointer"
                >
                  ← Go Back
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors cursor-pointer"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Content */}
          {!loading && !error && pg && (
            <div className="grid lg:grid-cols-3 gap-6">

              {/* ── LEFT COLUMN ───────────────────────────────── */}
              <div className="lg:col-span-2 space-y-5">

                {/* Image Gallery */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={`http://localhost:5000/${images[activeImage]}`}
                      alt={pg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    {/* Status */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Active Listing
                      </span>
                    </div>

                    {/* Image counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-slate-900/80 backdrop-blur-sm border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">
                          {activeImage + 1} / {images.length}
                        </span>
                      </div>
                    )}

                    {/* Prev/Next arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 border border-white/10 text-white flex items-center justify-center hover:bg-slate-900/90 transition-all cursor-pointer"
                        >‹</button>
                        <button
                          onClick={() => setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 border border-white/10 text-white flex items-center justify-center hover:bg-slate-900/90 transition-all cursor-pointer"
                        >›</button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {images.length > 1 && (
                    <div className="flex gap-2 p-3 overflow-x-auto">
                      {images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer
                            ${activeImage === i ? "border-blue-500/60" : "border-white/10 hover:border-white/25"}`}
                        >
                          <img
                            src={`http://localhost:5000/${img}`}
                            alt={`thumb-${i}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Basic Info */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <h1 className="text-white font-extrabold text-xl tracking-tight leading-tight">
                        {pg.title}
                      </h1>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="text-white/30 text-xs">📍</span>
                        <span className="text-white/45 text-sm">
                          {[pg.address, pg.city, pg.state].filter(Boolean).join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white font-bold text-xl">{formatPrice(pg.rent)}</p>
                      <p className="text-white/35 text-xs">/month</p>
                    </div>
                  </div>

                  {/* Meta chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/8">
                    {[
                      { label: "Room Type", value: pg.roomType || "N/A" },
                      { label: "Security Deposit", value: formatPrice(pg.deposit) },
                      { label: "Available For", value: pg.availableFor || "All" },
                      { label: "Pincode", value: pg.pincode || "N/A" },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                        <p className="text-white/30 text-xs">{item.label}</p>
                        <p className="text-white font-semibold text-sm mt-0.5 truncate">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                {facilities.length > 0 && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-semibold text-sm mb-4">Facilities & Amenities</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {facilities.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-3 py-2.5">
                          <span className="text-base">{getFacilityIcon(f)}</span>
                          <span className="text-white/60 text-sm capitalize">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {pg.description && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-semibold text-sm mb-3">About this PG</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{pg.description}</p>
                  </div>
                )}

                {/* House Rules */}
                {pg.rules && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-semibold text-sm mb-3">House Rules</h3>
                    <div className="space-y-2">
                      {pg.rules.split("\n").filter(Boolean).map((rule, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-white/45 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 mt-1.5" />
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ── RIGHT COLUMN ──────────────────────────────── */}
              <div className="space-y-5">

                {/* Landlord card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/40 text-xs font-medium mb-4 uppercase tracking-wider">Listed By</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                      {pg.owner?.name ? pg.owner.name.charAt(0).toUpperCase() : "L"}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{pg.owner?.name || "Landlord"}</p>
                      <p className="text-white/35 text-xs">{pg.owner?.email || ""}</p>
                    </div>
                  </div>
                  <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
                    📞 Contact Landlord
                  </button>
                </div>

                {/* AI Analysis */}
                <AIPanel pg={pg} />

                {/* Quick info */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-wider">Quick Info</p>
                  <div className="space-y-2.5">
                    {[
                      { label: "Monthly Rent", value: formatPrice(pg.rent) },
                      { label: "Security Deposit", value: formatPrice(pg.deposit) },
                      { label: "Room Type", value: pg.roomType || "N/A" },
                      { label: "City", value: pg.city || "N/A" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-2">
                        <span className="text-white/35 text-xs">{item.label}</span>
                        <span className="text-white text-xs font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-wider">Share Listing</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { navigator.clipboard.writeText(window.location.href); }}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-xs font-medium py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      📋 Copy Link
                    </button>
                    <button
                      onClick={() => { if (navigator.share) navigator.share({ title: pg.title, url: window.location.href }); }}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-xs font-medium py-2.5 rounded-xl transition-all cursor-pointer"
                    >
                      📤 Share
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PGDetails;