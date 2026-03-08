const TestimonialCard = ({ name, role, text, avatar }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3 min-w-0">
    <div className="text-blue-500 text-2xl font-serif leading-none">"</div>
    <p className="text-xs text-gray-600 leading-relaxed flex-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{text}</p>
    <div className="flex items-center gap-3 mt-2">
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}>
        {avatar}
      </div>
      <div>
        <p className="text-xs font-bold text-gray-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>{name}</p>
        <p className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;