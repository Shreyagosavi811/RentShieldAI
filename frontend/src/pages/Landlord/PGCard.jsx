const PGCard = ({ isOwner }) => {
  return (
    <div className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src="https://via.placeholder.com/400x200"
          alt="PG"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Active
          </span>
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-slate-900/90 backdrop-blur-sm border border-white/10 text-white text-sm font-bold px-3 py-1 rounded-xl">
            ₹8,000
            <span className="text-white/40 text-xs font-normal">/month</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title & location */}
        <div className="mb-3">
          <h3 className="text-white font-bold text-base leading-tight">
            Sunrise PG
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-white/30 text-xs">📍</span>
            <span className="text-white/40 text-xs">Pune, Maharashtra</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {["WiFi", "AC", "Meals"].map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/10 text-white/50 text-xs px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-4" />

        {/* Actions */}
        {!isOwner && (
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer">
            View Details →
          </button>
        )}

        {isOwner && (
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/30 text-white/60 hover:text-amber-400 text-xs font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
              ✏️ Edit
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/30 text-white/60 hover:text-red-400 text-xs font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
              🗑️ Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PGCard;