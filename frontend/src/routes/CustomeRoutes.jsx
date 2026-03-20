
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Landlord/Dashboard";
import DashboardTenants from "../pages/Tenants/Dashboard";
import AddPG from "../pages/Landlord/AddPG";
import Search from "../pages/Tenants/Search";
import PGDetails from "../pages/Tenants/PGDatails";

function CustomRoutes() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home/>}/>

          {/* 🔐 Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* {Protected Routes will go here in the future} */}
      <Route path="/landlord/dashboard" element={<Dashboard/>} />
      <Route path="/landlord/add" element={<AddPG/>} />

      {/* Tenant Routes will go here in the future */}
      <Route path="/tenant/dashboard" element={<DashboardTenants/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/pg/1" element={<PGDetails/>}/>
      </Routes>
    </>
  );
}

export default CustomRoutes  

