import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, role }) => {

    const data = JSON.parse(localStorage.getItem("user"));

    // Not logged in or no token
    if (!data || !data.token) return <Navigate to="/login" replace />;
    const userRole = data?.user?.role;

    // Wrong role
    if (role && data.role !== role) return <Navigate to="/" replace />;

    return children;
};

export default ProtectedRoute;