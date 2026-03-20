import { useNavigate } from "react-router-dom";

// Demo PG data — swap with real API data later
const demoPGs = [
  {
    id: 1,
    name: "Sunrise PG for Boys",
    location: "Kothrud, Pune",
    rent: "8,000",
    tags: ["WiFi", "AC", "Meals"],
    roomType: "Single",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
  },
  {
    id: 2,
    name: "Green Valley Hostel",
    location: "Baner, Pune",
    rent: "6,500",
    tags: ["WiFi", "Laundry", "CCTV"],
    roomType: "Double",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    id: 3,
    name: "City Stay PG",
    location: "Viman Nagar, Pune",
    rent: "10,000",
    tags: ["AC", "Meals", "Gym"],
    roomType: "Single",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  },
  {
    id: 4,
    name: "Maple Residency",
    location: "Wakad, Pune",
    rent: "7,200",
    tags: ["WiFi", "Parking", "TV"],
    roomType: "Triple",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80",
  },
  {
    id: 5,
    name: "Sky View Hostel",
    location: "Hinjewadi, Pune",
    rent: "9,500",
    tags: ["AC", "WiFi", "Hot Water"],
    roomType: "Double",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    id: 6,
    name: "The Student Hub",
    location: "Shivajinagar, Pune",
    rent: "5,800",
    tags: ["WiFi", "Meals", "CCTV"],
    roomType: "Single",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
];

let cardIndex = 0;

const PGCard = ({ isOwner, pg: propPg }) => {
  const navigate = useNavigate();

  // Use passed pg prop (real data) or cycle through demo data
  const pg = propPg || demoPGs[cardIndex++ % demoPGs.length];

  return (
    <div className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-white px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Active
          </span>
        </div>

        {/* Room type badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-slate-900/80 backdrop-blur-sm border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">
            {pg.roomType}
          </span>
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-slate-900/90 backdrop-blur-sm border border-white/10 text-white text-sm font-bold px-3 py-1 rounded-xl">
            ₹{pg.rent}
            <span className="text-white/40 text-xs font-normal">/mo</span>
          </span>
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 bg-slate-900/90 backdrop-blur-sm border border-white/10 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
            ★ {pg.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title & location */}
        <div className="mb-3">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-1">
            {pg.name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-white/30 text-xs">📍</span>
            <span className="text-white/40 text-xs">{pg.location}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pg.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/10 text-white/45 text-xs px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-3" />

        {/* Actions */}
        {!isOwner && (
          <button
            onClick={() => navigate(`/pg/${pg.id}`)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
          >
            View Details →
          </button>
        )}

        {isOwner && (
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/landlord/edit/${pg.id}`)}
              className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-amber-500/15 border border-white/10 hover:border-amber-500/30 text-white/60 hover:text-amber-400 text-xs font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              ✏️ Edit
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-1.5 bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/30 text-white/60 hover:text-red-400 text-xs font-medium py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
            >
              🗑️ Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PGCard;