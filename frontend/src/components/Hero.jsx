import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden px-6">

      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          AI-Powered Rental Protection
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Find a Safe, Fair &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Trustworthy PG
          </span>{" "}
          with AI
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
          RentShield AI helps students and renters verify safety, fairness,
          and trust before choosing a place to stay.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 no-underline text-sm"
          >
            Join Us 🚀
          </Link>
          <Link
            to="/features"
            className="text-white/60 hover:text-white border border-white/15 hover:border-white/30 font-medium px-8 py-3.5 rounded-xl transition-all duration-200 no-underline text-sm backdrop-blur-sm"
          >
            Explore Features →
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 border-t border-white/10 pt-10">
          {[
            { value: "500+", label: "PGs Listed" },
            { value: "10k+", label: "Happy Tenants" },
            { value: "98%", label: "Accuracy Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;