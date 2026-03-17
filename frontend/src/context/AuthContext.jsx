import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    role: null,
    profileCompleted: false
  });

  // 🔁 Load from localStorage on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const profileCompleted = localStorage.getItem("profileCompleted") === "true";

    if (token) {
      setAuth({ token, role, profileCompleted });
    }
  }, []);

  // 🔐 LOGIN
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role || "");
    localStorage.setItem(
      "profileCompleted",
      data.profileCompleted ? "true" : "false"
    );

    setAuth({
      token: data.token,
      role: data.role,
      profileCompleted: data.profileCompleted
    });
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.clear();
    setAuth({
      token: null,
      role: null,
      profileCompleted: false
    });
  };

  // 🎯 UPDATE ROLE
  const setRole = (role) => {
    localStorage.setItem("role", role);
    setAuth((prev) => ({ ...prev, role }));
  };

  // 🎯 UPDATE PROFILE STATUS
  const setProfileCompleted = (value) => {
    localStorage.setItem("profileCompleted", value ? "true" : "false");
    setAuth((prev) => ({ ...prev, profileCompleted: value }));
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        setRole,
        setProfileCompleted
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};