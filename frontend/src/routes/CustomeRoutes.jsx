import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Landlord Pages
import Dashboard from "../pages/Landlord/Dashboard";
import AddPG from "../pages/Landlord/AddPG";

// Tenant Pages
import DashboardTenants from "../pages/Tenants/Dashboard";
import Search from "../pages/Tenants/Search";
import PGDetails from "../pages/Tenants/PGDatails";
import AIAnalysis from "../pages/Tenants/AIAnalysis";

// Protected Route
import ProtectedRoute from "./ProtectedRoute";

function CustomRoutes() {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🏠 Landlord Routes */}
      <Route
        path="/landlord/dashboard"
        element={
          <ProtectedRoute role="landlord">
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/landlord/add"
        element={
          <ProtectedRoute role="landlord">
            <AddPG />
          </ProtectedRoute>
        }
      />

      {/* 👤 Tenant Routes */}
      <Route
        path="/tenant/dashboard"
        element={
          <ProtectedRoute role="tenant">
            <DashboardTenants />
          </ProtectedRoute>
        }
      />

      <Route
        path="/search"
        element={
          <ProtectedRoute role="tenant">
            <Search />
          </ProtectedRoute>
        }
      />

      <Route
        path="/pg/1"
        element={
          <ProtectedRoute role="tenant">
            <PGDetails />
          </ProtectedRoute>
        }
      />

      {/* 🔥 FIXED AI ROUTE        <Route
        path="/tenant/ai-analysis"
        element={
          <ProtectedRoute role="tenant">
            <AIAnalysis />
          </ProtectedRoute> */}

          <Route path="/tenant/ai-analysis" element={<AIAnalysis />} />

        
      
    </Routes>
  );
}

export default CustomRoutes;