import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import About from "./pages/About";
import Team from "./pages/Team";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/profile" element={<Profile />} />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <h1 className="text-center mt-20 text-2xl">
            404 Page Not Found
          </h1>
        }
      />
    </Routes>
  );
}