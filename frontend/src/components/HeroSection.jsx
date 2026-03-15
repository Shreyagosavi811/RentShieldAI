import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-6 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find a Safe, Fair, and <br />
          <span className="text-blue-300">Trustworthy PG</span> with AI
        </h1>
        <div className="mb-8"><SearchBar /></div>
        <p className="text-white/80 text-sm max-w-xl mx-auto mb-8">
          RentShield AI helps students and renters verify safety and fairness of rental properties and PGs.
        </p>
      </div>
    </section>
  );
}