const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Student, Pune",
    avatar: "RS",
    review:
      "RentShield helped me avoid a scam listing that looked completely legit. The AI caught a fake address within seconds. Absolute lifesaver.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "MBA Student, Bangalore",
    avatar: "PM",
    review:
      "I used the contract risk analysis before signing my PG agreement. It flagged 3 unfair clauses I would have completely missed. 100% recommend.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Working Professional, Mumbai",
    avatar: "AN",
    review:
      "The landlord reputation feature gave me confidence. I knew exactly who I was dealing with before even making a call. Super transparent.",
    rating: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Design Student, Hyderabad",
    avatar: "SK",
    review:
      "Finally an app that actually protects renters. The safety score made comparing PGs so much easier. Found my place in 2 days.",
    rating: 5,
  },
  {
    name: "Dev Patel",
    role: "IT Professional, Chennai",
    avatar: "DP",
    review:
      "The AI fairness check showed my hostel was overpriced by 18% compared to the area average. Negotiated a better deal on the spot.",
    rating: 5,
  },
  {
    name: "Ananya Joshi",
    role: "Medical Student, Delhi",
    avatar: "AJ",
    review:
      "Moving to a new city is stressful enough. RentShield made the rental part stress-free. Verified, safe, and quick. Loved it.",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-amber-400 text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-cyan-400 text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Real Reviews from Real Renters
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center tracking-tight mb-4">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Students & Renters
          </span>
        </h2>

        <p className="text-white/45 text-center text-base md:text-lg max-w-xl mx-auto mb-16">
          Thousands of tenants have used RentShield AI to find safer, fairer places to live.
        </p>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 text-5xl text-white/5 font-serif leading-none select-none">
                "
              </span>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Review */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/35 text-xs">{t.role}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;