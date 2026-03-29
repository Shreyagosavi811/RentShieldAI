import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AIAnalysis = () => {
  const location = useLocation();
  const listingData = location.state?.listingData;

  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("Pune");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // ✅ Auto-fill if listing passed
  useEffect(() => {
    if (listingData) {
      setText(listingData.review || listingData.description || "");
      setPrice(listingData.price || "");
      setCity(listingData.city || "Pune");
    }
  }, [listingData]);

  // 🔥 MAIN ANALYZE FUNCTION
  const handleAnalyze = async () => {
    if (!text.trim()) {
      setError("Please enter listing details");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/ai/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city,
          price: Number(price) || 15000,
          review: text,
        }),
      });

      // ❌ Backend not responding properly
      if (!res.ok) {
        throw new Error( res.statusText || "Backend error");
      }

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "AI failed");
        setLoading(false);
        return;
      }

      // 🎯 Format result
      const ai = data.data;

      setResult({
        score: ai.trust_score,
        summary: ai.explanation || "Analysis complete",

        risks:
          ai.warnings?.length > 0
            ? ai.warnings
            : ai.scam_detected
            ? ["Scam language detected"]
            : ["No major risks"],

        priceAnalysis: ai.predicted_rent
          ? `Expected ₹${ai.predicted_rent} vs Your ₹${price}`
          : "No data",

        recommendation: [
          ai.scam_detected && "Avoid advance payment",
          ai.fake_probability > 0.6 && "Listing may be fake",
          ai.trust_score < 50 && "High risk property",
          "Visit property physically",
          "Use platform payments only",
        ].filter(Boolean),
      });

    } catch (err) {
      console.error(err);

      // 🔥 Proper error handling
      if (err.message === "Failed to fetch") {
        setError("⚠ Backend not running on port 5000");
      } else {
        setError("Server error. Try again.");
      }
    }

    setLoading(false);
  };

  const getScoreColor = (score) => {
    if (score >= 75) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="p-6 min-h-screen bg-[#05070d] text-white">

      <h1 className="text-3xl font-bold mb-4">AI Rental Analyzer 🧠</h1>

      {/* INPUT */}
      <div className="bg-[#020617] p-6 rounded-xl border border-gray-800 space-y-4">

        <div className="flex gap-4">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-1/2 p-3 bg-gray-900 border border-gray-700"
          />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-1/2 p-3 bg-gray-900 border border-gray-700"
          />
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
          className="w-full p-4 bg-gray-900 border border-gray-700"
          placeholder="Paste listing or WhatsApp message..."
        />

        <button
          onClick={handleAnalyze}
          className="bg-blue-600 px-6 py-2 rounded"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {error && <p className="text-red-400">{error}</p>}
      </div>

      {/* RESULT */}
      {result && (
        <div className="mt-6 grid md:grid-cols-2 gap-6">

          <div className="bg-[#020617] p-6 border border-gray-800">
            <h2>Score</h2>
            <p className={getScoreColor(result.score)}>
              {result.score}/100
            </p>
          </div>

          <div className="bg-[#020617] p-6 border border-gray-800">
            <h2>Summary</h2>
            <p>{result.summary}</p>
          </div>

          <div className="bg-[#020617] p-6 border border-gray-800">
            <h2>Risks</h2>
            {result.risks.map((r, i) => <p key={i}>• {r}</p>)}
          </div>

          <div className="bg-[#020617] p-6 border border-gray-800">
            <h2>Price</h2>
            <p>{result.priceAnalysis}</p>
          </div>

          <div className="bg-[#020617] p-6 border border-gray-800 md:col-span-2">
            <h2>Recommendations</h2>
            {result.recommendation.map((r, i) => <p key={i}>• {r}</p>)}
          </div>

        </div>
      )}
    </div>
  );
};

export default AIAnalysis;