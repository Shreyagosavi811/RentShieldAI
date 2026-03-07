import { useState, useEffect } from "react";

const REPORT = {
  pgName: "Skyline Boys PG",
  location: "Kothrud, Pune",
  phone: "(909) 633-2568",
  overallScore: 8.7,
  fakeProbability: 6,
  categories: [
    {
      id: "rental_fairness",
      title: "Rental Fairness",
      badge: "Fair",
      badgeColor: "text-green-600 bg-green-100 border border-green-300",
      scoreLabel: "Score:",
      score: "8.5/10",
      icon: "💰",
      iconBg: "bg-green-100",
      items: ["Price vs. Market", "Standard Terms Check"],
    },
    {
      id: "landlord_reputation",
      title: "Landlord Reputation",
      badge: "Neutral",
      badgeColor: "text-orange-500 bg-orange-50 border border-orange-300",
      scoreLabel: "Score:",
      score: "3.2/10 Stars",
      icon: "🛡️",
      iconBg: "bg-orange-100",
      items: [
        "Review Sentiment Analysis (Positive 60%, Neutral 25%, Negative 15%)",
        "Recent Landlord Activity",
      ],
    },
    {
      id: "contract_risks",
      title: "Contract Risks",
      badge: null,
      scoreLabel: "Score:",
      score: "9.1/10",
      icon: "✅",
      iconBg: "bg-green-100",
      items: ["Key Clauses Analyzed", "Hidden Fees Flagged (None)"],
    },
    {
      id: "location_safety",
      title: "Location Safety",
      badge: null,
      scoreLabel: "Score:",
      score: "8.9/10",
      icon: "📍",
      iconBg: "bg-blue-100",
      items: [
        "Nearby Security Index (High)",
        "Commute Ease to MIT College (Excellent)",
      ],
    },
  ],
  safetyFactors: [
    { label: "CCTV", value: 60, barColor: "bg-orange-400", textColor: "text-orange-500" },
    { label: "Security Guard", value: 90, barColor: "bg-green-500", textColor: "text-green-500" },
    { label: "Well-lit Entry", value: 45, barColor: "bg-red-400", textColor: "text-red-500" },
  ],
  recommendations: [
    "Verify owner identity documents. Renters and cows with reatit identity docomnes and recommendacies.",
    "Discuss cleaning charges clause. Distcuss cleaning charges clause. Veriiify owners accommenbility.",
    "Verify cleaning charges clause. Property date lashroots and clause and reniching mannoted contracts.",
  ],
  reviews: [
    {
      author: "Sloppy Owner",
      rating: 3,
      text: "This student reweos the noni great renmars choian and har this vanu and tools about in the cracttl.",
      avatar: "S",
    },
  ],
  photos: [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=300&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&q=80",
  ],
};

function Gauge({ score }) {
  const [anim, setAnim] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setAnim(score), 400);
    return () => clearTimeout(t);
  }, [score]);

  const cx = 110, cy = 110, r = 82;
  const toRad = (d) => (d * Math.PI) / 180;
  const pct = anim / 10;
  const needleAngle = -180 + pct * 180;
  const nx = cx + (r - 18) * Math.cos(toRad(needleAngle));
  const ny = cy + (r - 18) * Math.sin(toRad(needleAngle));

  const arc = (sa, ea, ro) => {
    const x1 = cx + ro * Math.cos(toRad(sa));
    const y1 = cy + ro * Math.sin(toRad(sa));
    const x2 = cx + ro * Math.cos(toRad(ea));
    const y2 = cy + ro * Math.sin(toRad(ea));
    return `M ${x1} ${y1} A ${ro} ${ro} 0 0 1 ${x2} ${y2}`;
  };

  const zones = [
    { color: "#ef4444", sa: -180, ea: -144 },
    { color: "#f97316", sa: -144, ea: -108 },
    { color: "#eab308", sa: -108, ea: -72 },
    { color: "#84cc16", sa: -72, ea: -36 },
    { color: "#22c55e", sa: -36, ea: 0 },
  ];

  return (
    <div className="flex flex-col items-center">
      <svg width="220" height="125" viewBox="0 0 220 125">
        <path d={arc(-180, 0, r)} fill="none" stroke="#e5e7eb" strokeWidth="20" />
        {zones.map((z, i) => (
          <path key={i} d={arc(z.sa, z.ea, r)} fill="none" stroke={z.color} strokeWidth="18" />
        ))}
        <line
          x1={cx} y1={cy} x2={nx} y2={ny}
          stroke="#111827" strokeWidth="4" strokeLinecap="round"
          style={{ transition: "all 1.3s cubic-bezier(0.34,1.56,0.64,1)" }}
        />
        <circle cx={cx} cy={cy} r="8" fill="#111827" />
        <circle cx={cx} cy={cy} r="4" fill="white" />
      </svg>
      <div className="text-center -mt-1">
        <p className="text-2xl font-black text-gray-900">{score}/10</p>
        <p className="text-sm text-gray-500 font-medium">(Green Zone)</p>
      </div>
    </div>
  );
}

function AnimBar({ value, barColor, delay = 0 }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(value), 500 + delay);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1.5 overflow-hidden">
      <div
        className={`h-2.5 rounded-full ${barColor}`}
        style={{ width: `${w}%`, transition: "width 1s ease" }}
      />
    </div>
  );
}

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= n ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function RentShieldDashboard() {
  const d = REPORT;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-gray-100">

        {/* ── Navbar ── */}
        <nav className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-lg shadow">
              🛡️
            </div>
            <span className="text-xl font-extrabold text-gray-900">RentShield AI</span>
          </div>
          <div className="flex items-center gap-10">
            {["My Reports", "Search", "Profile", "Logout"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="max-w-screen-xl mx-auto px-6 py-7">

          {/* ── Page Header ── */}
          <div className="flex items-baseline justify-between mb-5 flex-wrap gap-2">
            <h1 className="text-3xl font-black text-gray-900">Risk Report</h1>
            <h2 className="text-3xl font-black text-gray-900">
              Report:{" "}
              <span className="text-blue-500">
                {d.pgName}, {d.location}
              </span>
            </h2>
          </div>

          {/* ── 4 Category Cards ── */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {d.categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-12 h-12 ${cat.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-base leading-snug">
                      {cat.title}
                    </h3>
                    {cat.badge && (
                      <span
                        className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1.5 ${cat.badgeColor}`}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{cat.scoreLabel}</p>
                <p className="text-base font-extrabold text-gray-900 mb-3">{cat.score}</p>
                <div className="space-y-1">
                  {cat.items.map((item, i) => (
                    <p key={i} className="text-sm text-gray-500 leading-snug">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Middle Row ── */}
          <div className="grid grid-cols-3 gap-4 mb-4">

            {/* Fake Listing Probability */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl font-extrabold text-gray-900 leading-snug mb-4">
                Fake Listing<br />Probability:
              </h3>
              <span className="text-7xl font-black text-green-500 leading-none">
                {d.fakeProbability}%
              </span>
            </div>

            {/* Gauge */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <h3 className="text-base font-extrabold text-gray-900 mb-1 text-center">
                Overall Safety & Trust Score
              </h3>
              <Gauge score={d.overallScore} />
            </div>

            {/* Safety Factors */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-base font-extrabold text-gray-900 mb-5">Safety Factors</h3>
              <div className="space-y-4">
                {d.safetyFactors.map((sf, i) => (
                  <div key={sf.label}>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 font-medium">• {sf.label}</span>
                      <span className={`text-sm font-extrabold ${sf.textColor}`}>
                        {sf.value}%
                      </span>
                    </div>
                    <AnimBar value={sf.value} barColor={sf.barColor} delay={i * 150} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Risk Summary ── */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
            <h3 className="text-base font-extrabold text-gray-900 mb-3">
              Risk Summary & Recommendations
            </h3>
            <ul className="list-disc pl-5 space-y-1.5">
              {d.recommendations.map((rec, i) => (
                <li key={i} className="text-sm text-gray-600 leading-relaxed">
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Bottom Row ── */}
          <div className="grid grid-cols-3 gap-4">

            {/* Summary + Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-5">
                <h3 className="text-base font-extrabold text-gray-900 mb-3">Summary</h3>
                <p className="text-sm font-semibold text-gray-800">
                  Report: {d.pgName}, {d.location},
                </p>
                <p className="text-sm text-gray-600">{d.location}</p>
                <a href="#" className="text-sm text-blue-500 font-semibold hover:underline block mt-0.5">
                  Google Maps Data
                </a>
                <p className="text-sm text-gray-600 mt-1.5 flex items-center gap-1">
                  <span>📞</span> {d.phone}
                </p>
              </div>
              <div className="h-48">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.26!2d73.8276!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sKothrud%2C%20Pune!5e0!3m2!1sen!2sin!4v1699000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-base font-extrabold text-gray-900 mb-4">Recent Reviews</h3>
              {d.reviews.map((rev, i) => (
                <div key={i}>
                  <Stars n={rev.rating} />
                  <p className="text-sm text-gray-600 mt-2 mb-3 leading-relaxed">{rev.text}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                      {rev.avatar}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{rev.author}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Photos */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-base font-extrabold text-gray-900 mb-4">
                Verified property Photos
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {d.photos.map((url, i) => (
                  <div key={i} className="rounded-xl overflow-hidden h-24 bg-gray-100">
                    <img
                      src={url}
                      alt={`PG ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}