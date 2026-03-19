const steps = [
  {
    icon: "🔍",
    title: "Search PG or Hostel",
    desc: "Enter a location or name to instantly browse verified PGs and hostels near you.",
  },
  {
    icon: "📋",
    title: "View Details",
    desc: "Explore full property info — photos, facilities, pricing, rules, and landlord profile.",
  },
  {
    icon: "🤖",
    title: "Run AI Analysis",
    desc: "Our AI scans the listing for red flags, pricing fairness, and contract risks in seconds.",
  },
  {
    icon: "🏆",
    title: "Get Safety Score",
    desc: "Receive a clear trust score with a breakdown so you can rent with total confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-52 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Simple 4-Step Process
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-tight mb-4">
          How{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            RentShield
          </span>{" "}
          Works
        </h2>

        <p className="text-white/45 text-center text-base md:text-lg max-w-xl mx-auto mb-16">
          From search to safety score in under a minute — no guesswork, no stress.
        </p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 flex flex-col items-center text-center z-10"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-6 bg-slate-950 border border-white/15 text-cyan-400 text-xs font-bold px-2.5 py-0.5 rounded-full">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-white/10 flex items-center justify-center text-2xl mb-5 mt-2 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;