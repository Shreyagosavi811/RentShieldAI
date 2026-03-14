import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
 

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
}