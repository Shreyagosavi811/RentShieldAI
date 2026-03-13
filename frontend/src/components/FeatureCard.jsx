const FeatureCard = ({ icon, title, description, color }) => (
  <div className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: color + "15" }}>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-800 text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
      <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{description}</p>
    </div>
  </div>
);

export default FeatureCard;