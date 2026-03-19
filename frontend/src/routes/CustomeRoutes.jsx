
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function CustomRoutes() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home/>}/>

          {/* 🔐 Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default CustomRoutes  

