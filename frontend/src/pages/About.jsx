import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="bg-gray-50 py-16 px-6">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About RentShield AI
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto">
            RentShield AI is a smart platform designed to help students and
            professionals find safe, fair, and verified PG accommodations.
            Using AI technology, we analyze listings, detect fake properties,
            and provide landlord reputation insights.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Finding safe and trustworthy rental properties can be difficult,
              especially for students moving to new cities. Many people fall
              victim to fake listings, unfair contracts, or unreliable
              landlords.
            </p>

            <p className="text-gray-600">
              RentShield AI solves this problem by combining verified data,
              tenant reviews, and artificial intelligence to ensure renters
              make informed decisions before choosing a PG or rental home.
            </p>
          </div>

          <div className="bg-blue-100 rounded-xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-700">Verified Properties</p>

            <h3 className="text-5xl font-bold text-blue-600 mt-8 mb-2">1000+</h3>
            <p className="text-gray-700">Happy Students</p>
          </div>

        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose RentShield AI
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="font-semibold text-lg mb-2">
                AI Verification
              </h3>
              <p className="text-gray-600 text-sm">
                Our AI analyzes listings to detect fake properties and risky
                rental conditions.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold text-lg mb-2">
                Real Location Data
              </h3>
              <p className="text-gray-600 text-sm">
                Verified property locations help users find genuine and nearby
                PG accommodations.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-semibold text-lg mb-2">
                Landlord Reputation
              </h3>
              <p className="text-gray-600 text-sm">
                Tenant reviews and ratings ensure transparency and trust in the
                rental ecosystem.
              </p>
            </div>

          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our Vision
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our vision is to make rental housing safer and more transparent for
            everyone. RentShield AI aims to become the most trusted platform
            for PG and rental property verification across India.
          </p>

        </div>

      </div>
    </Layout>
  );
}