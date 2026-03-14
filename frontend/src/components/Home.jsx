import React from 'react'

import SearchBar from "./SearchBar";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";
const features = [
  {
    icon: "📍",
    title: "Real Location Data",
    description: "Verified, up-to-date location data for PGs and rental properties across your city.",
    color: "#2563eb",
  },
  {
    icon: "🤖",
    title: "AI Fairness Check",
    description: "AI-powered verification of safety and fairness of rental properties.",
    color: "#10b981",
  },
  {
    icon: "👤",
    title: "Landlord Reputation",
    description: "Comprehensive reputation scores based on tenant reviews and verified history.",
    color: "#f59e0b",
  },
  {
    icon: "📄",
    title: "Contract Risk Analysis",
    description: "Smart analysis of rental contracts to flag hidden risks and unfair clauses.",
    color: "#ef4444",
  },
  {
    icon: "🛡️",
    title: "Fake Listing Detector",
    description: "AI-backed detection system to identify and flag fraudulent property listings.",
    color: "#8b5cf6",
  },
];

const testimonials = [
  {
    name: "Arjun M.",
    role: "Engineering Student, Pune",
    text: "RentShield AI helped me avoid a fake PG listing that looked completely legit. The AI fairness check flagged it before I paid.",
    avatar: "A",
  },
  {
    name: "Priya K.",
    role: "MBA Student, Mumbai",
    text: "The landlord reputation feature gave me so much confidence. I finally found a trustworthy PG without any stress.",
    avatar: "P",
  },
  {
    name: "Rohan S.",
    role: "Working Professional, Bangalore",
    text: "Contract risk analysis saved me from a clause that would have cost me 3 months extra rent. Absolutely essential tool.",
    avatar: "R",
  },
];

// function Home() {
//      const features = [
//     {
//       icon: "📍",
//       title: "Real Location Data",
//       description:
//         "Verified, up-to-date location data for PGs and rental properties across your city.",
//       color: "#2563eb",
//     },
//     {
//       icon: "🤖",
//       title: "AI Fairness Check",
//       description:
//         "AI-powered verification of safety and fairness of rental properties.",
//       color: "#10b981",
//     },
//     {
//       icon: "👤",
//       title: "Landlord Reputation",
//       description:
//         "Comprehensive reputation scores based on tenant reviews and verified history.",
//       color: "#f59e0b",
//     },
//     {
//       icon: "📄",
//       title: "Contract Risk Analysis",
//       description:
//         "Smart analysis of rental contracts to flag hidden risks and unfair clauses.",
//       color: "#ef4444",
//     },
//     {
//       icon: "🛡️",
//       title: "Fake Listing Detector",
//       description:
//         "AI-backed detection system to identify and flag fraudulent property listings.",
//       color: "#8b5cf6",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Arjun M.",
//       role: "Engineering Student, Pune",
//       text: "RentShield AI helped me avoid a fake PG listing that looked completely legit.",
//       avatar: "A",
//     },
//     {
//       name: "Priya K.",
//       role: "MBA Student, Mumbai",
//       text: "The landlord reputation feature gave me confidence to find a trustworthy PG.",
//       avatar: "P",
//     },
//     {
//       name: "Rohan S.",
//       role: "Working Professional, Bangalore",
//       text: "Contract risk analysis saved me from a clause that would have cost extra rent.",
//       avatar: "R",
//     },
//   ];
//   return (
//     <div
//               className="min-h-screen bg-gray-50"
//               style={{ fontFamily: "'DM Sans', sans-serif" }}
//             >
//               {/* HERO SECTION */}
//               <section className="relative overflow-hidden pt-16 pb-24 px-6 bg-blue-900">
//                 <div className="max-w-4xl mx-auto text-center text-white">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                     Find a Safe, Fair, and
//                     <br />
//                     <span className="text-blue-300">
//                       Trustworthy PG
//                     </span>{" "}
//                     with AI
//                   </h1>

//                   <div className="mb-8">
//                     <SearchBar />
//                   </div>

//                   <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
//                     RentShield AI helps students and renters verify safety and
//                     fairness of rental properties and PGs.
//                   </p>
//                 </div>
//               </section>

//               {/* FEATURES */}
//               <section className="py-20 px-6 bg-white">
//                 <div className="max-w-6xl mx-auto text-center mb-12">
//                   <h2 className="text-3xl font-bold text-gray-900">
//                     How RentShield Works
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
//                   {features.map((f) => (
//                     <FeatureCard key={f.title} {...f} />
//                   ))}
//                 </div>
//               </section>

//               {/* TESTIMONIALS */}
//               <section className="py-12 px-6 bg-white border-t border-gray-100">
//         <div className="max-w-5xl mx-auto">
//           <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">
//             Trusted Across Universities
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
//             {[
//               { name: "Washington University", abbr: "WU" },
//               { name: "USU",                   abbr: "USU" },
//               { name: "Utah State",            abbr: "USU" },
//               { name: "Cornell",               abbr: "CU" },
//               { name: "University",            abbr: "UNV" },
//               { name: "UHA University",        abbr: "UHA" },
//             ].map((u, i) => (
//               <div key={i} className="flex items-center gap-2">
//                 <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#1a3a6b" }}>
//                   {u.abbr.charAt(0)}
//                 </div>
//                 <span className="text-xs font-semibold text-gray-600">{u.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//               {/* FOOTER */}
//                <footer style={{ background: "#0f1f3d" }} className="py-12 px-6 text-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
//           {/* Brand */}
//           <div className="col-span-2 md:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
//                 <span className="text-white text-xs font-bold">RS</span>
//               </div>
//               <span className="font-bold text-white">RentShield AI</span>
//             </div>
//             <p className="text-xs text-gray-400 leading-relaxed">
//               Helping students and renters find safe, fair, and trustworthy rental properties.
//             </p>
//           </div>

//           {[
//             { title: "Site",  links: ["Home", "PGs", "About Us", "Contact Us"] },
//             { title: "About", links: ["Blog", "Blog", "Contact"] },
//             { title: "Helps", links: ["Blog", "Contact"] },
//           ].map((col) => (
//             <div key={col.title}>
//               <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">{col.title}</h4>
//               <ul className="space-y-2">
//                 {col.links.map((link, i) => (
//                   <li key={i}>
//                     <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{link}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Social + Copyright */}
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-gray-500">© 2022 RentShield Reserved</p>
//           <div className="flex items-center gap-4">
//             {["f", "𝕏", "ig", "▶"].map((icon, i) => (
//               <button key={i} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-xs text-white">
//                 {icon}
//               </button>
//             ))}
//           </div>
//         </div>
//       </footer>
//             </div>
//   )
// }
function Home({ onSearch }) {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');
        .wave-bg {
          background: linear-gradient(135deg, #0f2354 0%, #1a3a6b 40%, #1e4080 60%, #2563eb 100%);
          clip-path: ellipse(110% 100% at 50% 0%);
        }
        .hero-section {
          background: linear-gradient(135deg, #0f2354 0%, #1a3a6b 50%, #1d4ed8 100%);
        }
        .blob-decoration {
          background: radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .accent-dot {
          width: 10px; height: 10px; border-radius: 50%;
          display: inline-block;
        }
      `}</style>

      {/* NAVBAR */}
    

      {/* HERO SECTION */}
      <section className="hero-section relative overflow-hidden pt-16 pb-24 px-6">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 blob-decoration opacity-40 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 blob-decoration opacity-30 rounded-full translate-y-1/2 -translate-x-1/4"></div>

        {/* Floating accents */}
        <div className="absolute top-16 left-12 float-anim" style={{ animationDelay: "0s" }}>
          <svg width="48" height="20" viewBox="0 0 48 20">
            <path d="M0 10 Q12 0 24 10 Q36 20 48 10" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute top-20 right-24 float-anim" style={{ animationDelay: "1s" }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 L14.5 9.5 L22 9.5 L16 14.5 L18.5 22 L12 17.5 L5.5 22 L8 14.5 L2 9.5 L9.5 9.5 Z" fill="rgba(37,99,235,0.4)" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-16 float-anim" style={{ animationDelay: "2s" }}>
          <div className="w-4 h-4 rounded-full" style={{ background: "#10b981", opacity: 0.7 }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-white/80 font-medium">AI-Powered Rental Verification</span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up-1 text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-1px" }}
          >
            Find a Safe, Fair, and
            <br />
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Trustworthy PG
            </span>{" "}
            with AI
          </h1>

          {/* SearchBar – onSearch prop wired up so search opens RentShieldSearch page */}
          <div className="fade-up-2 mb-8">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Sub text */}
          <p className="fade-up-3 text-white/70 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            RentShield AI is a modern platform to help{" "}
            <strong className="text-white">students and renters</strong> verify{" "}
            <strong className="text-white">safety and fairness</strong> of rental properties and PGs.
          </p>

          {/* CTA Buttons */}
          <div className="fade-up-3 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-95"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
            >
              Why RentShield AI?
            </button>
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/20 active:scale-95"
              style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "white", backdropFilter: "blur(8px)" }}
            >
              Browse Top Rated Areas
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">How It Works</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              RentShield Works:
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed)" }}></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY STUDENTS */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #f8faff 0%, #eff6ff 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Trusted by Students
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: "linear-gradient(90deg, #2563eb, #7c3aed)" }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY LOGOS */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">
            Trusted Across Universities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {[
              { name: "Washington University", abbr: "WU" },
              { name: "USU",                   abbr: "USU" },
              { name: "Utah State",            abbr: "USU" },
              { name: "Cornell",               abbr: "CU" },
              { name: "University",            abbr: "UNV" },
              { name: "UHA University",        abbr: "UHA" },
            ].map((u, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#1a3a6b" }}>
                  {u.abbr.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-gray-600">{u.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f1f3d" }} className="py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
                <span className="text-white text-xs font-bold">RS</span>
              </div>
              <span className="font-bold text-white">RentShield AI</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Helping students and renters find safe, fair, and trustworthy rental properties.
            </p>
          </div>

          {[
            { title: "Site",  links: ["Home", "PGs", "About Us", "Contact Us"] },
            { title: "About", links: ["Blog", "Blog", "Contact"] },
            { title: "Helps", links: ["Blog", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2022 RentShield Reserved</p>
          <div className="flex items-center gap-4">
            {["f", "𝕏", "ig", "▶"].map((icon, i) => (
              <button key={i} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-xs text-white">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home