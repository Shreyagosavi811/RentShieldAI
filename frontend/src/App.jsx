<<<<<<< HEAD
import './App.css'
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom"; // <--- ADD THIS LINE
>>>>>>> f0c8dfa66329276689a1242f6b3bed3475779a44
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
<<<<<<< HEAD
 
=======
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
>>>>>>> f0c8dfa66329276689a1242f6b3bed3475779a44

  return (
    <>
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={<Home />}
        />
        {/* SIGNUP PAGE */}
        <Route path="/signup" element={<SignUp />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f0c8dfa66329276689a1242f6b3bed3475779a44
