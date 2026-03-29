import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// ── Demo report data (replace with real API response later) ──
const DEMO_REPORT = {
  pgName: "Sunrise PG for Boys",
  pgLocation: "Kothrud, Pune, Maharashtra",
  analyzedAt: "26 March 2026, 10:45 AM",
  overallScore: 87,
  verdict: "Safe to Proceed",
  verdictType: "safe", // "safe" | "caution" | "danger"
  summary:
    "This PG listing appears genuine and fairly priced for the Kothrud area. The landlord has a strong track record. One clause in the deposit terms needs your attention before signing.",
  checks: [
    {
      id: 1,
      icon: "💰",
      title: "Pricing Fairness",
      score: 92,
      status: "pass",
      detail: "Monthly rent of ₹8,000 is within the expected range of ₹7,200–₹9,500 for similar PGs in Kothrud.",
    },
    {
      id: 2,
      icon: "📍",
      title: "Listing Authenticity",
      score: 95,
      status: "pass",
      detail: "Address verified on maps. Photos match the location. No signs of duplicate or fake listing detected.",
    },
    {
      id: 3,
      icon: "🧑‍💼",
      title: "Landlord Reputation",
      score: 88,
      status: "pass",
      detail: "Landlord has 12 verified listings and a 4.8 average rating across 24 tenant reviews.",
    },
    {
      id: 4,
      icon: "📄",
      title: "Contract Risk",
      score: 62,
      status: "warn",
      detail: "Deposit clause states 'non-refundable under any circumstance' — this is legally questionable. Request a revised agreement.",
    },
    {
      id: 5,
      icon: "🏠",
      title: "Facilities Match",
      score: 90,
      status: "pass",
      detail: "Listed facilities (WiFi, AC, Meals) were cross-checked with tenant reviews and appear accurate.",
    },
    {
      id: 6,
      icon: "🔒",
      title: "Safety & Security",
      score: 85,
      status: "pass",
      detail: "CCTV, gated entry, and 24/7 watchman mentioned by multiple past tenants. Area crime index is low.",
    },
  ],
  recommendations: [
    "Request a revised agreement removing the non-refundable deposit clause.",
    "Ask for a written receipt for every payment you make.",
    "Visit the property in person before finalizing.",
    "Confirm WiFi speed with current tenants before moving in.",
  ],
};

// ── Helpers ───────────────────────────────────────────────
const getScoreColor = (score) => {
  if (score >= 80) return "text-green-400";
  if (score >= 60) return "text-amber-400";
  return "text-red-400";
};

const getScoreBg = (score) => {
  if (score >= 80) return "bg-green-500/10 border-green-500/20";
  if (score >= 60) return "bg-amber-500/10 border-amber-500/20";
  return "bg-red-500/10 border-red-500/20";
};

const getVerdictStyle = (type) => {
  if (type === "safe") return { bg: "from-green-600/20 to-cyan-500/10", border: "border-green-500/20", text: "text-green-400", icon: "✅" };
  if (type === "caution") return { bg: "from-amber-600/20 to-orange-500/10", border: "border-amber-500/20", text: "text-amber-400", icon: "⚠️" };
  return { bg: "from-red-600/20 to-rose-500/10", border: "border-red-500/20", text: "text-red-400", icon: "🚫" };
};

// ── Score Ring (pure CSS, no library) ─────────────────────
const ScoreRing = ({ score }) => {
  const color = score >= 80 ? "#4ade80" : score >= 60 ? "#fbbf24" : "#f87171";
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const dash = (score / 100) * circumference;

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        {/* Background ring */}
        <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        {/* Score ring */}
        <circle
          cx="60" cy="60" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ transition: "stroke-dasharray 1s ease" }}
        />
      </svg>
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-extrabold ${getScoreColor(score)}`}>{score}</span>
        <span className="text-white/30 text-xs mt-0.5">/ 100</span>
      </div>
    </div>
  );
};

// ── Check Card ────────────────────────────────────────────
const CheckCard = ({ check }) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-all duration-200`}>
    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-base flex-shrink-0">
          {check.icon}
        </div>
        <p className="text-white font-semibold text-sm">{check.title}</p>
      </div>
      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold flex-shrink-0 ${getScoreBg(check.score)} ${getScoreColor(check.score)}`}>
        {check.status === "pass" ? "✓" : "⚠"} {check.score}
      </div>
    </div>
    <p className="text-white/45 text-xs leading-relaxed pl-12">{check.detail}</p>
  </div>
);

// ── Main Page ─────────────────────────────────────────────
const AIAnalysisReport = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const report = DEMO_REPORT; // swap with real API data later
  const verdict = getVerdictStyle(report.verdictType);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar */}
     

      <div className="relative z-10 max-w-4xl mx-auto px-5 py-8 space-y-5">

        {/* ── 1. PG Info + Meta ─────────────────────────── */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              AI Report
            </div>
            <h2 className="text-white font-extrabold text-lg tracking-tight">{report.pgName}</h2>
            <p className="text-white/40 text-sm mt-0.5">📍 {report.pgLocation}</p>
          </div>
          <div className="text-right sm:text-right flex-shrink-0">
            <p className="text-white/25 text-xs">Analyzed on</p>
            <p className="text-white/60 text-xs font-medium mt-0.5">{report.analyzedAt}</p>
            <button
              onClick={() => window.print()}
              className="mt-2 text-xs text-cyan-400 hover:text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/40 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
            >
              🖨 Print Report
            </button>
          </div>
        </div>

        {/* ── 2. Overall Score + Verdict ────────────────── */}
        <div className={`bg-gradient-to-br ${verdict.bg} border ${verdict.border} rounded-2xl p-6`}>
          <div className="flex flex-col sm:flex-row items-center gap-6">

            {/* Score ring */}
            <div className="flex-shrink-0">
              <ScoreRing score={report.overallScore} />
              <p className="text-center text-white/40 text-xs mt-2">Overall Safety Score</p>
            </div>

            {/* Verdict */}
            <div className="flex-1 text-center sm:text-left">
              <div className={`inline-flex items-center gap-2 text-sm font-bold ${verdict.text} mb-2`}>
                <span>{verdict.icon}</span>
                {report.verdict}
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{report.summary}</p>

              {/* Score bar breakdown */}
              <div className="mt-4 space-y-2">
                {report.checks.map((check) => (
                  <div key={check.id} className="flex items-center gap-3">
                    <span className="text-white/35 text-xs w-32 truncate">{check.title}</span>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${check.score >= 80 ? "bg-green-400" : check.score >= 60 ? "bg-amber-400" : "bg-red-400"}`}
                        style={{ width: `${check.score}%` }}
                      />
                    </div>
                    <span className={`text-xs font-semibold w-8 text-right ${getScoreColor(check.score)}`}>{check.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. Detailed Checks ────────────────────────── */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Detailed Analysis</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {report.checks.map((check) => (
              <CheckCard key={check.id} check={check} />
            ))}
          </div>
        </div>

        {/* ── 4. Recommendations ───────────────────────── */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-base">
              💡
            </div>
            <h3 className="text-white font-bold text-sm">Recommendations</h3>
          </div>
          <div className="space-y-3">
            {report.recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Action buttons ─────────────────────────── */}
        <div className="grid sm:grid-cols-2 gap-4 pb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-medium text-sm py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
          >
            ← Back to PG Details
          </button>
          <button
            onClick={() => navigate("/search")}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            🔍 Search More PGs
          </button>
        </div>

      </div>
    </div>
  );
};

export default AIAnalysisReport;