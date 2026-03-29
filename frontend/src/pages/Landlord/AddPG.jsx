import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios.js";

const AddPG = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    rent: "",
    deposit: "",
    roomType: "",
    facilities: [],
    description: "",
    rules: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");

  const facilityOptions = [
    "WiFi", "AC", "Meals", "Laundry", "Parking",
    "CCTV", "Power Backup", "Hot Water", "TV", "Gym",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const toggleFacility = (facility) => {
    setForm((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility],
    }));
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imagePreviews.length > 6) {
      setError("You can upload a maximum of 6 images");
      return;
    }
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]);
    setForm((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append text fields
      Object.keys(form).forEach((key) => {
        if (key !== "images" && key !== "facilities") {
          formData.append(key, form[key]);
        }
      });

      // Append facilities array
      form.facilities.forEach((f) => {
        formData.append("facilities", f);
      });

      // Append images
      form.images.forEach((img) => {
        formData.append("images", img);
      });

      await API.post("/pg", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/landlord/dashboard");

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to add PG");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 focus:border-blue-500/60 text-white placeholder-white/25 text-sm px-4 py-3 rounded-xl outline-none transition-all duration-200";

  const labelClass = "block text-white/60 text-xs font-medium mb-1.5";

  const SectionTitle = ({ icon, title, subtitle }) => (
    <div className="flex items-start gap-3 mb-5">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-white/10 flex items-center justify-center text-base flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <p className="text-white/35 text-xs mt-0.5">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-white/10 px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/landlord/dashboard"
            className="w-8 h-8 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all no-underline text-sm"
          >
            ←
          </Link>
          <div>
            <h1 className="text-white font-bold text-sm">Add New PG / Hostel</h1>
            <p className="text-white/30 text-xs">Fill in the details below</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/landlord/dashboard"
            className="text-white/40 hover:text-white text-xs font-medium px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-all no-underline"
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            Publish PG →
          </button>
        </div>
      </header>

      <div className="relative z-10 max-w-3xl mx-auto px-5 py-8">

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded-xl mb-6">
            <span>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Section 1 — Basic Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <SectionTitle icon="🏠" title="Basic Information" subtitle="Name and location of your property" />

            <div className="space-y-4">
              <div>
                <label className={labelClass}>PG / Hostel Name <span className="text-red-400">*</span></label>
                <input
                  name="title"
                  placeholder="e.g. Sunrise PG for Boys"
                  className={inputClass}
                  value={form.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={labelClass}>Full Address <span className="text-red-400">*</span></label>
                <input
                  name="address"
                  placeholder="Street, Area, Landmark"
                  className={inputClass}
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelClass}>City <span className="text-red-400">*</span></label>
                  <input
                    name="city"
                    placeholder="e.g. Pune"
                    className={inputClass}
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input
                    name="state"
                    placeholder="Maharashtra"
                    className={inputClass}
                    value={form.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={labelClass}>Pincode</label>
                  <input
                    name="pincode"
                    placeholder="411001"
                    className={inputClass}
                    maxLength={6}
                    value={form.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 — Pricing */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <SectionTitle icon="💰" title="Pricing & Room Type" subtitle="Monthly rent, deposit and room category" />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Monthly Rent (₹) <span className="text-red-400">*</span></label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">₹</span>
                  <input
                    name="rent"
                    type="number"
                    placeholder="8000"
                    className={`${inputClass} pl-8`}
                    value={form.rent}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Security Deposit (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">₹</span>
                  <input
                    name="deposit"
                    type="number"
                    placeholder="16000"
                    className={`${inputClass} pl-8`}
                    value={form.deposit}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Room Type</label>
              <div className="grid grid-cols-3 gap-2">
                {["Single", "Double", "Triple"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, roomType: type })}
                    className={`py-2.5 text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer
                      ${form.roomType === type
                        ? "bg-gradient-to-r from-blue-600/30 to-blue-500/10 border-blue-500/40 text-white"
                        : "bg-white/5 border-white/10 text-white/45 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 — Facilities */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <SectionTitle icon="✨" title="Facilities & Amenities" subtitle="Select all that apply to your property" />

            <div className="flex flex-wrap gap-2">
              {facilityOptions.map((f) => {
                const selected = form.facilities.includes(f);
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => toggleFacility(f)}
                    className={`text-xs font-medium px-4 py-2 rounded-xl border transition-all duration-200 cursor-pointer
                      ${selected
                        ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-400"
                        : "bg-white/5 border-white/10 text-white/45 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    {selected ? "✓ " : ""}{f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4 — Description */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <SectionTitle icon="📝" title="Description & Rules" subtitle="Help tenants understand your property better" />

            <div className="space-y-4">
              <div>
                <label className={labelClass}>Property Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your PG — location benefits, nearby places, atmosphere, type of tenants preferred..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                  value={form.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelClass}>House Rules</label>
                <textarea
                  name="rules"
                  placeholder="e.g. No smoking, Guests allowed till 9pm, No pets..."
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.rules}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Section 5 — Images */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <SectionTitle icon="📷" title="Property Images" subtitle="Upload up to 6 photos (first image will be the cover)" />

            {/* Upload area */}
            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-white/10 hover:border-blue-500/40 hover:bg-blue-500/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 mb-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                📤
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm font-medium">Click to upload images</p>
                <p className="text-white/25 text-xs mt-1">PNG, JPG up to 5MB each · Max 6 images</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImages}
              />
            </div>

            {/* Image previews */}
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {imagePreviews.map((src, i) => (
                  <div key={i} className="relative group rounded-xl overflow-hidden aspect-video">
                    <img
                      src={src}
                      alt={`preview-${i}`}
                      className="w-full h-full object-cover"
                    />
                    {i === 0 && (
                      <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-cyan-400 text-xs px-2 py-0.5 rounded-full border border-white/10">
                        Cover
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/80 hover:bg-red-500 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                    >
                      ×
                    </button>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}

                {/* Add more slot */}
                {imagePreviews.length < 6 && (
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-white/10 hover:border-blue-500/30 rounded-xl aspect-video flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-white/5 transition-all"
                  >
                    <span className="text-white/25 text-xl">＋</span>
                    <span className="text-white/25 text-xs">Add more</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer"
          >
            Publish PG / Hostel →
          </button>

          <p className="text-center text-white/20 text-xs pb-4">
            Your listing will go live immediately after publishing
          </p>

        </form>
      </div>
    </div>
  );
};

export default AddPG;