import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function DashboardRouter() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.role) {
      navigate("/select-role");
    } else if (!auth.profileCompleted) {
      navigate("/profile-setup");
    } else if (auth.role === "student") {
      navigate("/student/dashboard");
    } else if (auth.role === "landlord") {
      navigate("/landlord/dashboard");
    }
  }, [auth, navigate]);

  return <p>Redirecting...</p>;
}