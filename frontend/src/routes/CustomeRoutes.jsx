import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import About from '../pages/About'
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import FeaturesSection from "../components/FeaturesSection";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Profile from "../pages/Profile";
function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </>
  );
}

export default CustomRoutes;