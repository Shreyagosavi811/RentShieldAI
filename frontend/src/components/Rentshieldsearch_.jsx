import { useState } from "react";

const pgData = [
  {
    id: 1,
    name: "Sunrise PG for Boys",
    area: "Kothrud, Pune",
    price: 8500,
    rating: 4.8,
    reviews: 124,
    aiScore: 96,
    landlordScore: 94,
    type: "Boys",
    verified: true,
    fake: false,
    contractRisk: "Low",
    amenities: ["WiFi", "AC", "Meals", "Laundry", "Parking"],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80",
    badge: "Top Rated",
    badgeColor: "emerald",
    distance: "1.2 km from MIT College",
    available: 3,
  },
  {
    id: 2,
    name: "Green Valley PG",
    area: "Wakad, Pune",
    price: 7200,
    rating: 4.5,
    reviews: 89,
    aiScore: 88,
    landlordScore: 85,
    type: "Girls",
    verified: true,
    fake: false,
    contractRisk: "Low",
    amenities: ["WiFi", "Meals", "CCTV", "Power Backup"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80",
    badge: "Girls Only",
    badgeColor: "pink",
    distance: "0.8 km from Symbiosis",
    available: 5,
  },
  {
    id: 3,
    name: "Urban Nest Co-Living",
    area: "Hinjewadi, Pune",
    price: 12000,
    rating: 4.9,
    reviews: 203,
    aiScore: 98,
    landlordScore: 99,
    type: "Co-ed",
    verified: true,
    fake: false,
    contractRisk: "Very Low",
    amenities: ["WiFi", "AC", "Gym", "Meals", "Gaming Zone", "Rooftop"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
    badge: "Premium",
    badgeColor: "amber",
    distance: "0.3 km from Infosys Gate",
    available: 2,
  },
  {
    id: 4,
    name: "Budget Stay PG",
    area: "Shivajinagar, Pune",
    price: 5500,
    rating: 3.2,
    reviews: 41,
    aiScore: 52,
    landlordScore: 38,
    type: "Boys",
    verified: false,
    fake: true,
    contractRisk: "High",
    amenities: ["WiFi"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80",
    badge: "⚠️ Suspicious",
    badgeColor: "red",
    distance: "2.1 km from FC Road",
    available: 10,
  },
  {
    id: 5,
    name: "Tranquil Homes PG",
    area: "Baner, Pune",
    price: 9800,
    rating: 4.6,
    reviews: 156,
    aiScore: 91,
    landlordScore: 90,
    type: "Girls",
    verified: true,
    fake: false,
    contractRisk: "Low",
    amenities: ["WiFi", "AC", "Meals", "CCTV", "Housekeeping"],
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400&q=80",
    badge: "Verified",
    badgeColor: "blue",
    distance: "1.5 km from Pune University",
    available: 1,
  },
  {
    id: 6,
    name: "The Scholar's Den",
    area: "Viman Nagar, Pune",
    price: 10500,
    rating: 4.7,
    reviews: 178,
    aiScore: 93,
    landlordScore: 92,
    type: "Co-ed",
    verified: true,
    fake: false,
    contractRisk: "Very Low",
    amenities: ["WiFi", "AC", "Study Room", "Meals", "Laundry"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80",
    badge: "Study Friendly",
    badgeColor: "violet",
    distance: "0.5 km from NIBM",
    available: 4,
  },
];

const badgeStyles = {
  emerald: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  pink:    "bg-pink-500/20 text-pink-400 border border-pink-500/30",
  amber:   "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  red:     "bg-red-500/20 text-red-400 border border-red-500/30",
  blue:    "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  violet:  "bg-violet-500/20 text-violet-400 border border-violet-500/30",
};

const contractColors = {
  "Very Low": "text-emerald-400",
  Low:        "text-green-400",
  Medium:     "text-amber-400",
  High:       "text-red-400",
};

const scoreColor = (s) => s >= 90 ? "text-emerald-400" : s >= 70 ? "text-amber-400" : "text-red-400";
const scoreBg    = (s) => s >= 90 ? "from-emerald-500 to-teal-500" : s >= 70 ? "from-amber-500 to-orange-500" : "from-red-500 to-rose-600";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function PGCard({ pg, index }) {
  const [saved,    setSaved]    = useState(false);
  const [showFake, setShowFake] = useState(false);

  return (
    <div
      className="group relative bg-[#0f1623] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1"
      style={{ animation: "fadeUp 0.4s ease both", animationDelay: `${index * 80}ms` }}
    >
      {/* Fake listing overlay */}
      {pg.fake && !showFake && (
        <div className="absolute inset-0 z-20 bg-red-950/85 backdrop-blur-sm flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center">
          <div className="text-5xl">🚨</div>
          <p className="text-red-300 font-bold text-lg">Fake Listing Detected</p>
          <p className="text-red-400/80 text-sm leading-relaxed">
            Our AI has flagged this listing as potentially fraudulent. Proceed with extreme caution.
          </p>
          <button
            onClick={() => setShowFake(true)}
            className="mt-1 px-4 py-1.5 bg-red-500/20 border border-red-500/40 text-red-300 text-sm rounded-lg hover:bg-red-500/30 transition-colors"
          >
            View anyway
          </button>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={pg.image} alt={pg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] via-[#0f1623]/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md ${badgeStyles[pg.badgeColor]}`}>
            {pg.badge}
          </span>
          {pg.verified && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
          )}
        </div>

        {/* Save */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <svg className={`w-4 h-4 transition-colors ${saved ? "text-red-400" : "text-white/70"}`} fill={saved ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Availability */}
        <div className="absolute bottom-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-md backdrop-blur-md font-medium ${pg.available <= 2 ? "bg-red-500/30 text-red-300" : "bg-black/40 text-white/70"}`}>
            {pg.available <= 2 ? `⚡ Only ${pg.available} left` : `${pg.available} rooms available`}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-white font-bold text-base leading-tight">{pg.name}</h3>
            <p className="text-gray-400 text-sm mt-0.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {pg.area}
            </p>
            <p className="text-gray-500 text-xs mt-0.5">{pg.distance}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-white font-bold text-lg">₹{pg.price.toLocaleString()}</div>
            <div className="text-gray-500 text-xs">/month</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <StarRating rating={pg.rating} />
          <span className="text-white text-sm font-semibold">{pg.rating}</span>
          <span className="text-gray-500 text-xs">({pg.reviews})</span>
          <span className="ml-auto text-xs text-gray-500 border border-white/10 rounded px-1.5 py-0.5">{pg.type}</span>
        </div>

        {/* AI Score Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
            <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">AI Score</div>
            <div className={`text-xl font-black ${scoreColor(pg.aiScore)}`}>{pg.aiScore}</div>
            <div className={`h-1 rounded-full mt-1.5 bg-gradient-to-r ${scoreBg(pg.aiScore)}`} style={{ width: `${pg.aiScore}%` }} />
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
            <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Landlord</div>
            <div className={`text-xl font-black ${scoreColor(pg.landlordScore)}`}>{pg.landlordScore}</div>
            <div className={`h-1 rounded-full mt-1.5 bg-gradient-to-r ${scoreBg(pg.landlordScore)}`} style={{ width: `${pg.landlordScore}%` }} />
          </div>
          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
            <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Contract</div>
            <div className={`text-sm font-bold mt-1 ${contractColors[pg.contractRisk]}`}>{pg.contractRisk}</div>
            <div className="text-gray-600 text-[10px] mt-0.5">Risk Level</div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {pg.amenities.map((a) => (
            <span key={a} className="text-[11px] text-gray-400 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">{a}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-2 pt-1">
          <button className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
            View Details
          </button>
          <button className="px-4 py-2.5 border border-white/10 text-gray-300 text-sm rounded-xl hover:bg-white/[0.05] transition-colors">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
// Props:
//   initialQuery  – query string passed from LandingPage SearchBar
//   onBack        – function to go back to LandingPage
export default function RentShieldSearch({ initialQuery = "", onBack }) {
  const [query,  setQuery]  = useState(initialQuery);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("AI Score");

  const FILTERS = ["All", "Boys", "Girls", "Co-ed", "Verified Only"];
  const SORTS   = ["AI Score", "Price: Low", "Price: High", "Rating"];

  const results = pgData
    .filter((pg) => {
      if (filter === "Verified Only") return pg.verified;
      if (filter === "All") return true;
      return pg.type === filter;
    })
    .sort((a, b) => {
      if (sortBy === "AI Score")    return b.aiScore - a.aiScore;
      if (sortBy === "Price: Low")  return a.price - b.price;
      if (sortBy === "Price: High") return b.price - a.price;
      if (sortBy === "Rating")      return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="min-h-screen bg-[#080d14] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Navbar ── */}
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080d14]/90 backdrop-blur-xl px-6 py-4 flex items-center gap-4">
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">RS</span>
            </div>
            <span className="font-bold">RentShield <span className="text-blue-400">AI</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400 ml-4">
            {["Features", "About Us", "Contact"].map((n) => (
              <a key={n} href="#" className="hover:text-white transition-colors">{n}</a>
            ))}
          </nav>

          <button className="ml-auto px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-500 transition-colors">
            Get Started
          </button>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">

          {/* Search Bar */}
          <div className="mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search PGs, area, college..."
                  className="w-full bg-[#0f1623] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 text-sm"
                />
              </div>
              <button className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all text-sm whitespace-nowrap">
                Search PGs
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm flex-wrap">
              <span className="text-gray-400">Showing</span>
              <span className="text-white font-semibold">{results.length} results</span>
              {query && (
                <>
                  <span className="text-gray-400">for</span>
                  <span className="text-blue-400 font-medium">"{query}"</span>
                </>
              )}
              <span className="ml-auto flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse inline-block" />
                AI verified · Live data
              </span>
            </div>
          </div>

          {/* Filters + Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filter === f
                      ? "bg-blue-600 text-white"
                      : "bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:bg-white/[0.08]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Sort:</span>
              <div className="flex gap-1">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSortBy(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      sortBy === s
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Fake listing warning */}
          {results.some((p) => p.fake) && (
            <div className="mb-5 flex items-start gap-3 bg-red-950/30 border border-red-500/20 rounded-xl px-4 py-3">
              <span className="text-xl">🛡️</span>
              <div>
                <p className="text-red-300 font-semibold text-sm">RentShield AI Warning</p>
                <p className="text-red-400/70 text-xs mt-0.5">
                  1 listing has been flagged as potentially fake. Our AI has reduced its visibility automatically.
                </p>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map((pg, i) => (
              <PGCard key={pg.id} pg={pg} index={i} />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "AI Score 90+",   desc: "Highly safe & fair",    color: "text-emerald-400" },
              { label: "AI Score 70–89", desc: "Generally acceptable",  color: "text-amber-400"   },
              { label: "AI Score <70",   desc: "Proceed with caution",  color: "text-red-400"     },
              { label: "🚨 Flagged",      desc: "Possible fake listing", color: "text-red-300"     },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3 flex flex-col gap-0.5">
                <span className={`text-sm font-bold ${item.color}`}>{item.label}</span>
                <span className="text-gray-600 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}