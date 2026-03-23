import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ← prevents flash of wrong UI

  // ── Load user from localStorage on app start ──────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) {
        const data = JSON.parse(raw);

        // Check token expiry before restoring session
        if (data?.token) {
          const payload = JSON.parse(atob(data.token.split(".")[1]));
          const isExpired = payload.exp * 1000 < Date.now();

          if (!isExpired) {
            setUser(data); // restore valid session
          } else {
            localStorage.removeItem("user"); // clear expired session
          }
        }
      }
    } catch {
      localStorage.removeItem("user"); // clear corrupted data
    } finally {
      setLoading(false); // always stop loading
    }
  }, []);

  // ── Login — call this after successful API login ───────
  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  // ── Logout — clears everything ─────────────────────────
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // ── Helpers ────────────────────────────────────────────
  const isAuthenticated = !!user?.token;
  const isLandlord = user?.role === "landlord";
  const isTenant = user?.role === "tenant";

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated,
        isLandlord,
        isTenant,
      }}
    >
      {/* Don't render app until auth state is resolved */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// ── Custom hook — use this everywhere instead of useContext(AuthContext) ──
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};