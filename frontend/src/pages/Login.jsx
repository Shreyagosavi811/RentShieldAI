import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password) {
      return setError("All fields are required");
    }
    try {

      useEffect(async () => {
        const { data } = await API.post("/auth/login", form);
        
        console.log("Login response:", data); // ← add this

        localStorage.setItem("user", JSON.stringify({
          token: data.token,
          role: data.role,
          name: data.name,
          email: data.email,
        }));

        // Redirect based on role
        if (data.user.role === "landlord") {
          navigate("/landlord/dashboard");
        } else {
          navigate("/tenant/dashboard");
        }
      }, []);

    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-blue-500/60 focus:bg-white/8 text-white placeholder-white/25 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200";

  const labelClass = "block text-white/60 text-xs font-medium mb-1.5 mt-4";

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
            🛡️
          </div>
          <span className="text-white font-extrabold text-lg tracking-tight">
            RentShield <span className="text-cyan-400">AI</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Welcome back 👋
            </h2>
            <p className="text-white/40 text-sm mt-1">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mb-2">
              <span>⚠️</span>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>

            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="rahul@example.com"
              className={inputClass}
              value={form.email}
              onChange={handleChange}
            />

            <label className={labelClass}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`${inputClass} pr-12`}
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors text-xs cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end mt-2">
              <Link
                to="/forgot-password"
                className="text-white/30 hover:text-cyan-400 text-xs transition-colors no-underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer"
            >
              Sign In →
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/20 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Register link */}
          <p className="text-center text-white/35 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300 font-medium no-underline transition-colors"
            >
              Create one
            </Link>
          </p>

        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs mt-5">
          Protected by RentShield AI — your data stays private
        </p>

      </div>
    </div>
  );
};

export default Login;