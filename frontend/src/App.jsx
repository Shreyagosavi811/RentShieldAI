import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import FeatureCard from "./components/FeatureCard";
import TestimonialCard from "./components/TestimonialCard";

export default function App() {
  const features = [
    {
      icon: "📍",
      title: "Real Location Data",
      description:
        "Verified, up-to-date location data for PGs and rental properties across your city.",
      color: "#2563eb",
    },
    {
      icon: "🤖",
      title: "AI Fairness Check",
      description:
        "AI-powered verification of safety and fairness of rental properties.",
      color: "#10b981",
    },
    {
      icon: "👤",
      title: "Landlord Reputation",
      description:
        "Comprehensive reputation scores based on tenant reviews and verified history.",
      color: "#f59e0b",
    },
    {
      icon: "📄",
      title: "Contract Risk Analysis",
      description:
        "Smart analysis of rental contracts to flag hidden risks and unfair clauses.",
      color: "#ef4444",
    },
    {
      icon: "🛡️",
      title: "Fake Listing Detector",
      description:
        "AI-backed detection system to identify and flag fraudulent property listings.",
      color: "#8b5cf6",
    },
  ];

  const testimonials = [
    {
      name: "Arjun M.",
      role: "Engineering Student, Pune",
      text: "RentShield AI helped me avoid a fake PG listing that looked completely legit.",
      avatar: "A",
    },
    {
      name: "Priya K.",
      role: "MBA Student, Mumbai",
      text: "The landlord reputation feature gave me confidence to find a trustworthy PG.",
      avatar: "P",
    },
    {
      name: "Rohan S.",
      role: "Working Professional, Bangalore",
      text: "Contract risk analysis saved me from a clause that would have cost extra rent.",
      avatar: "R",
    },
  ];

  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div
              className="min-h-screen bg-gray-50"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* HERO SECTION */}
              <section className="relative overflow-hidden pt-16 pb-24 px-6 bg-blue-900">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Find a Safe, Fair, and
                    <br />
                    <span className="text-blue-300">
                      Trustworthy PG
                    </span>{" "}
                    with AI
                  </h1>

                  <div className="mb-8">
                    <SearchBar />
                  </div>

                  <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
                    RentShield AI helps students and renters verify safety and
                    fairness of rental properties and PGs.
                  </p>
                </div>
              </section>

              {/* FEATURES */}
              <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    How RentShield Works
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                  {features.map((f) => (
                    <FeatureCard key={f.title} {...f} />
                  ))}
                </div>
              </section>

              {/* TESTIMONIALS */}
              <section className="py-20 px-6 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Trusted by Students
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                  {testimonials.map((t) => (
                    <TestimonialCard key={t.name} {...t} />
                  ))}
                </div>
              </section>

              {/* FOOTER */}
              <footer className="py-12 px-6 bg-gray-900 text-white text-center">
                <p className="text-sm">
                  © 2026 RentShield AI. All rights reserved.
                </p>
              </footer>
            </div>
          }
        />

        {/* SIGNUP PAGE */}
        <Route path="/signup" element={<SignUp />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}