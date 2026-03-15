import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import LandingPage from "../components/LandingPage";

function CustomRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<FeatureCard />} />
      </Routes>
    </>
  );
}

export default CustomRoutes;