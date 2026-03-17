import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SelectRole from "./pages/Auth/SelectRole";
import ProfileSetup from "./pages/Auth/ProfileSetup";

import StudentDashboard from "./pages/Student/Dashboard";
import LandlordDashboard from "./pages/Landlord/Dashboard";
import PGSearch from "./pages/Student/PGSearch";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import DashboardRouter from "./pages/DashboardRouter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* 🌐 PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 AUTH FLOW */}
        <Route
          path="/select-role"
          element={
            <ProtectedRoute>
              <SelectRole />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile-setup"
          element={
            <ProtectedRoute>
              <ProfileSetup />
            </ProtectedRoute>
          }
        />

        {/* 🎯 MAIN DASHBOARD ROUTER */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />

        {/* 🎓 STUDENT */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute requireProfile>
              <RoleBasedRoute allowedRole="student">
                <StudentDashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute requireProfile>
              <RoleBasedRoute allowedRole="student">
                <PGSearch />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        {/* 🏠 LANDLORD */}
        <Route
          path="/landlord/dashboard"
          element={
            <ProtectedRoute requireProfile>
              <RoleBasedRoute allowedRole="landlord">
                <LandlordDashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;