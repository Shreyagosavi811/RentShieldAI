import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const demoImages = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
];

const facilities = [
  { icon: "📶", label: "WiFi" },
  { icon: "❄️", label: "AC Rooms" },
  { icon: "🍽️", label: "Meals Included" },
  { icon: "🧺", label: "Laundry" },
  { icon: "📷", label: "CCTV" },
  { icon: "⚡", label: "Power Backup" },
];

const PGDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer text-sm"
          >
            ←
          </button>
          <div>
            <h1 className="text-white font-bold text-sm">PG Details</h1>
            <p className="text-white/30 text-xs">Full property information</p>
          </div>
        </div>

        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-sm shadow-lg shadow-blue-500/30">
            🛡️
          </div>
          <span className="hidden sm:block text-white font-extrabold text-sm tracking-tight">
            RentShield <span className="text-cyan-400">AI</span>
          </span>
        </Link>

        <button className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer text-sm" title="Save listing">
          ❤️
        </button>
      </header>

      <div className="relative z-10 max-w-5xl mx-auto px-5 py-8">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT — Images + Info */}
          <div className="lg:col-span-2 space-y-5">

            {/* Image gallery */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {/* Main image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={demoImages[activeImage]}
                  alt="PG"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Active Listing
                  </span>
                </div>

                {/* Image count */}
                <div className="absolute bottom-4 right-4">
                  <span className="bg-slate-900/80 backdrop-blur-sm border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">
                    {activeImage + 1} / {demoImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 p-3">
                {demoImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-1 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer
                      ${activeImage === i ? "border-blue-500/60" : "border-white/10 hover:border-white/25"}`}
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Basic Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-white font-extrabold text-xl tracking-tight">Sunrise PG for Boys</h1>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="text-white/30 text-xs">📍</span>
                    <span className="text-white/45 text-sm">Kothrud, Pune, Maharashtra</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-white font-bold text-xl">₹8,000</p>
                  <p className="text-white/35 text-xs">/month</p>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/8">
                {[
                  { label: "Room Type", value: "Single" },
                  { label: "Deposit", value: "₹16,000" },
                  { label: "Available For", value: "Boys" },
                  { label: "Listed", value: "2 days ago" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 flex-1 min-w-[100px]">
                    <p className="text-white/30 text-xs">{item.label}</p>
                    <p className="text-white font-semibold text-sm mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-4">Facilities & Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {facilities.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 bg-white/5 border border-white/8 rounded-xl px-3 py-2.5">
                    <span className="text-base">{f.icon}</span>
                    <span className="text-white/60 text-sm">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-3">About this PG</h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Fully furnished PG with modern amenities and a safe, comfortable environment. Located in a prime residential area with easy access to public transport, markets, and colleges. The property features 24/7 security, regular housekeeping, and a friendly community atmosphere ideal for students and working professionals.
              </p>
            </div>

            {/* House Rules */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-sm mb-3">House Rules</h3>
              <div className="space-y-2">
                {["No smoking on premises", "Guests allowed till 9:00 PM", "Gate closes at 10:30 PM", "No pets allowed"].map((rule) => (
                  <div key={rule} className="flex items-center gap-2.5 text-white/45 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Landlord + AI Panel */}
          <div className="space-y-5">

            {/* Landlord card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-white/50 text-xs font-medium mb-4 uppercase tracking-wider">Listed By</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  R
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Rajesh Kumar</p>
                  <p className="text-white/35 text-xs">Landlord · 12 listings</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>
                <span className="text-white/30 text-xs">4.8 (24 reviews)</span>
              </div>
              <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
                📞 Contact Landlord
              </button>
            </div>

            {/* AI Analysis card */}
            <div className="bg-gradient-to-br from-blue-600/15 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">AI Safety Analysis</p>
                  <p className="text-white/35 text-xs">Powered by RentShield AI</p>
                </div>
              </div>

              {!analyzed ? (
                <>
                  <p className="text-white/45 text-xs leading-relaxed mb-4">
                    Our AI will analyze this PG for pricing fairness, listing authenticity, landlord reputation, and potential red flags.
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
              ) : (
                <div className="space-y-3">
                  {/* Score */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    <p className="text-white/35 text-xs mb-1">Safety Score</p>
                    <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                      87
                    </p>
                    <p className="text-green-400 text-xs mt-0.5">✓ Safe to Proceed</p>
                  </div>

                  {/* Checks */}
                  {[
                    { label: "Pricing Fair", status: "pass", note: "Matches area average" },
                    { label: "Listing Verified", status: "pass", note: "Address confirmed" },
                    { label: "Landlord Reputation", status: "pass", note: "4.8 rating" },
                    { label: "Contract Risk", status: "warn", note: "Review clause 4" },
                  ].map((check) => (
                    <div key={check.label} className="flex items-center justify-between gap-2 bg-white/5 border border-white/8 rounded-xl px-3 py-2.5">
                      <div>
                        <p className="text-white/70 text-xs font-medium">{check.label}</p>
                        <p className="text-white/30 text-xs">{check.note}</p>
                      </div>
                      <span className={`text-sm flex-shrink-0 ${check.status === "pass" ? "text-green-400" : "text-amber-400"}`}>
                        {check.status === "pass" ? "✓" : "⚠"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Share */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white/50 text-xs font-medium mb-3 uppercase tracking-wider">Share Listing</p>
              <div className="flex gap-2">
                {["📋 Copy Link", "📤 Share"].map((btn) => (
                  <button key={btn} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white text-xs font-medium py-2.5 rounded-xl transition-all cursor-pointer">
                    {btn}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDetails;