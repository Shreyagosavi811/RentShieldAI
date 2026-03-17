import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  requiredRole,
  requireProfile = false
}) {
  const { auth } = useAuth();

  const { token, role, profileCompleted } = auth;

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ❌ Role not selected
  if (!role) {
    return <Navigate to="/select-role" />;
  }

  // ❌ Role mismatch
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  // ❌ Profile not completed
  if (requireProfile && !profileCompleted) {
    return <Navigate to="/profile-setup" />;
  }

  // ✅ Allowed
  return children;
}