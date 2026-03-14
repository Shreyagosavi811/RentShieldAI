import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import About from "./pages/About";
import RentShieldSearch from "./components/Rentshieldsearch_";


export default function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Rentshieldsearch_" element={<RentShieldSearch />} />
      </Routes>
    </>
  );
}