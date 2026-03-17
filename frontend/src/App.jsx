import { Routes, Route } from "react-router-dom"; // <--- ADD THIS LINE
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchBar from "./components/SearchBar";
import FeatureCard from "./components/FeatureCard";
import TestimonialCard from "./components/TestimonialCard";
import CustomRoutes from "./routes/CustomeRoutes";

export default function App() {
  return (
    <>
      <CustomRoutes/>
    </>
  );
}

