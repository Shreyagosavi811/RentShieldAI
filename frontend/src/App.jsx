import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import About from "./pages/About";

import SearchBar from "./components/SearchBar";
import FeatureCard from "./components/FeatureCard";
import TestimonialCard from "./components/TestimonialCard";
import RentShieldSearch from "./components/Rentshieldsearch_";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/Rentshieldsearch_" element={<RentShieldSearch />} />
      </Routes>
    </>
  );
}