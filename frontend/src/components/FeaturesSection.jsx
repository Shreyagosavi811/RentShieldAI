const features = [
  {
    icon: "📍",
    title: "Real Location Data",
    desc: "Accurate location-based PG listings pulled from verified sources so you always know what's near you.",
  },
  {
    icon: "⚖️",
    title: "AI Fairness Check",
    desc: "Analyze rent pricing against market rates to ensure you're never overpaying for a place.",
  },
  {
    icon: "🧑‍💼",
    title: "Landlord Reputation",
    desc: "Know your landlord's track record before signing anything — ratings, reviews, and red flags.",
  },
  {
    icon: "📄",
    title: "Contract Risk Analysis",
    desc: "Our AI scans rental agreements and flags risky or unfair clauses before you commit.",
  },
  {
    icon: "🚨",
    title: "Fake Listing Detection",
    desc: "AI-powered scam detection keeps fraudulent listings off your radar so you stay safe.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your data stays yours. End-to-end protection on every search, analysis, and interaction.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Why RentShield AI
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-tight mb-4">
          Everything you need to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            rent smarter
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-white/45 text-center text-base md:text-lg max-w-xl mx-auto mb-16">
          Powerful AI tools built to protect tenants and bring
          transparency to every rental decision.
        </p>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/40 to-cyan-500/20 border border-white/10 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Subtle bottom accent on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;