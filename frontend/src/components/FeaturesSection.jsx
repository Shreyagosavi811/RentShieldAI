import Footer from "./Footer";
import Navbar from "./Navbar";

const features = [
  {
    icon: "🛡",
    title: "AI Fraud Detection",
    description: "Detect fake rental listings using intelligent AI analysis."
  },
  {
    icon: "📍",
    title: "Location Verification",
    description: "Verify property location and nearby area details easily."
  },
  {
    icon: "📄",
    title: "Document Analysis",
    description: "Upload rent agreements and detect suspicious clauses."
  },
  {
    icon: "⭐",
    title: "Safety Score",
    description: "Get a trust score before renting any property."
  }
];

const FeaturesSection = () => {
  return (
    <>
    <section id="features" className="py-20 bg-gray-50">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Powerful Features
          </h2>
          <p className="text-gray-500 mt-3">
            Smart tools that protect you from rental fraud
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 text-center"
            >

              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
    </>
  );
};

export default FeaturesSection;