import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <>
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/home"
          element={<><Navbar /><Home /></>}
        />
        {/* LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* SIGNUP PAGE */}
        <Route path="/signup" element={<SignUp />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

