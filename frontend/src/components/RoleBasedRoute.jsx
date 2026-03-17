import { Navigate } from "react-router-dom";

export default function RoleBasedRoute({ children, allowedRole }) {
  const role = localStorage.getItem("role");

  if (role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
}