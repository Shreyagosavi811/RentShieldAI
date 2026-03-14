import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import RentShieldSearch from "./components/Rentshieldsearch_";

export default function App() {
  const [page, setPage] = useState("landing");
  const [query, setQuery] = useState("");

  const handleSearch = ({ city, query: q }) => {
    const combined = [city, q].filter(Boolean).join(" · ");
    setQuery(combined);
    setPage("search");
  };

  const handleBack = () => {
    setPage("landing");
    setQuery("");
  };

  return (
    <>
      <Navbar />
    <Routes>
    
        <Route path="/"  element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
         <Route path="/Rentshieldsearch_" element={<RentShieldSearch />} />
      </Routes>
    </>
  );
}
