import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "tenant",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password) {
      return setError("All fields are required");
    }

    // TEMP: Save user locally
    localStorage.setItem("user", JSON.stringify(form));

    // Redirect
    if (form.role === "landlord") {
      navigate("/landlord");
    } else {
      navigate("/tenant");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-blue-500/60 focus:bg-white/8 text-white placeholder-white/25 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200";

  const labelClass = "block text-white/60 text-xs font-medium mb-1.5 mt-4";

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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
              Create your account
            </h2>
            <p className="text-white/40 text-sm mt-1">
              Join thousands of renters using AI to stay safe
            </p>
          </div>

          {/* Role Toggle */}
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 mb-2">
            {["tenant", "landlord"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setForm({ ...form, role: r })}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer capitalize ${
                  form.role === r
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {r === "tenant" ? "🏠 Tenant" : "🏢 Landlord"}
              </button>
            ))}
          </div>
          <p className="text-white/25 text-xs mb-2">
            {form.role === "tenant"
              ? "I'm looking for a PG or hostel to rent"
              : "I want to list my PG or hostel"}
          </p>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mt-3">
              <span>⚠️</span>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-2">

            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Rahul Sharma"
              className={inputClass}
              value={form.name}
              onChange={handleChange}
            />

            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="rahul@example.com"
              className={inputClass}
              value={form.email}
              onChange={handleChange}
            />

            <label className={labelClass}>Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm select-none">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="98765 43210"
                className={`${inputClass} pl-12`}
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
              />
            </div>

            <label className={labelClass}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Min. 8 characters"
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer"
            >
              Create Account →
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-white/35 text-sm mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-medium no-underline transition-colors">
              Sign in
            </Link>
          </p>

        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-xs mt-5">
          By registering you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Register;