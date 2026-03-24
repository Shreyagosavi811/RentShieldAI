
import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Landlord/Dashboard";
import DashboardTenants from "../pages/Tenants/Dashboard";
import AddPG from "../pages/Landlord/AddPG";
import Search from "../pages/Tenants/Search";
import PGDetails from "../pages/Tenants/PGDatails";
import ProtectedRoute from "./ProtectedRoute";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔐 Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* {Protected Routes will go here in the future} */}

        <Route path="/landlord/dashboard"
          element={
            <ProtectedRoute role="landlord">
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path="/landlord/add" element={
            <ProtectedRoute role="landlord">
              <AddPG />
            </ProtectedRoute>
          } />


        {/* Tenant Routes will go here in the future */}
        <Route path="/tenant/dashboard"
          element={
            <ProtectedRoute role="tenant">
              <DashboardTenants />
            </ProtectedRoute>
          } />
        <Route path="/search"
          element={
            <ProtectedRoute role="tenant">
              <Search />
            </ProtectedRoute>
          } />
        <Route path="/pg/:id"
          element={
            <ProtectedRoute role="tenant">
              <PGDetails />
            </ProtectedRoute>
          } />
      </Routes>
    </>
  );
}

export default CustomRoutes

