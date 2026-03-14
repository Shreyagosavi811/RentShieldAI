import { Routes, Route } from "react-router-dom"; // <--- ADD THIS LINE
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import FeatureCard from "./components/FeatureCard";
import TestimonialCard from "./components/TestimonialCard";

export default function App() {
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

