import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const demoImages = [
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
];

const PGDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  // 🔥 REAL AI CALL
  const handleAnalyze = async () => {
    setAnalyzing(true);

    try {
      const res = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: "Pune",
          price: 8000,
          review:
            "Fully furnished PG with deposit required before visit. Urgent booking needed.",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.data);
      }
    } catch (err) {
      console.error("AI Error", err);
    }

    setAnalyzing(false);
  };

  // 🎯 UI Helpers
  const getScoreColor = (score) => {
    if (score >= 75) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getRiskText = (score) => {
    if (score >= 75) return "✓ Safe to Proceed";
    if (score >= 50) return "⚠ Moderate Risk";
    return "⚠ High Risk";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="sticky top-0 bg-slate-950 border-b border-white/10 px-5 h-16 flex items-center justify-between">
        <button onClick={() => navigate(-1)}>←</button>
        <h1>PG Details</h1>
        <span>🛡️</span>
      </header>

      <div className="max-w-5xl mx-auto p-5 grid lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-5">

          {/* Image */}
          <img
            src={demoImages[activeImage]}
            className="w-full h-72 object-cover rounded-xl"
          />

          {/* Title */}
          <div>
            <h1 className="text-xl font-bold">Sunrise PG for Boys</h1>
            <p className="text-gray-400">Kothrud, Pune</p>
            <p className="text-lg font-semibold mt-2">₹8,000/month</p>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-5">

          {/* AI CARD */}
          <div className="bg-blue-900/20 border border-blue-500/30 p-5 rounded-xl">

            <h3 className="mb-3">🤖 AI Safety Analysis</h3>

            {!result ? (
              <button
                onClick={handleAnalyze}
                className="w-full bg-blue-600 p-2 rounded"
              >
                {analyzing ? "Analyzing..." : "Analyze with AI"}
              </button>
            ) : (
              <div className="space-y-4">

                {/* SCORE */}
                <div className="text-center">
                  <p className="text-sm text-gray-400">Safety Score</p>
                  <p className={`text-4xl font-bold ${getScoreColor(result.trust_score)}`}>
                    {result.trust_score}
                  </p>
                  <p className="text-sm mt-1">
                    {getRiskText(result.trust_score)}
                  </p>
                </div>

                {/* WARNINGS */}
                <div>
                  <p className="text-sm text-gray-400 mb-2">Risks</p>
                  {result.warnings?.map((w, i) => (
                    <p key={i}>⚠ {w}</p>
                  ))}
                </div>

                {/* PRICE */}
                <div>
                  <p className="text-sm text-gray-400">Price Insight</p>
                  <p>
                    Expected ₹{result.predicted_rent}
                  </p>
                </div>

                {/* SCAM */}
                {result.scam_detected && (
                  <div className="text-red-400 text-sm">
                    🚨 Scam language detected!
                  </div>
                )}

                {/* RECOMMENDATIONS */}
                <div>
                  <p className="text-sm text-gray-400">Recommendations</p>
                  <ul>
                    <li>• Visit before paying</li>
                    <li>• Avoid advance transfer</li>
                    <li>• Verify landlord</li>
                  </ul>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default PGDetails;