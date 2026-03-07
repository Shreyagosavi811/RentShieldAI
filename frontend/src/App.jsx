import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">RentShield AI</h1>
        <p className="text-xl text-gray-600 mb-8">
          Find a Safe, Fair, and Trustworthy PG with AI
        </p>

        <SearchBar />

        <p className="mt-6 text-gray-700">
          RentShield AI is a condom platform to help students and renters verify
          safety and fairness of rental properties and PGs.
        </p>

        <div className="flex gap-4 mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Why RentShield AI?
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Browse Top Rated Areas
          </a>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-semibold mb-6">RentShield Works:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Real Location Data</h3>
            <p className="text-gray-600">
              Real Location Data is colourable data across to your comicity.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">AI Fairness Check</h3>
            <p className="text-gray-600">
              AI Fairness Check: verify as safety & fairness of rental properties.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Landlord Reputation</h3>
            <p className="text-gray-600">
              Landlord Reputation: employees accompolnments and Renters.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Contract Risk Analysis</h3>
            <p className="text-gray-600">
              Contract risk analysis to provides contract pomortes and PGs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="font-bold text-xl mb-2">Fake Listing Detector</h3>
            <p className="text-gray-600">
              Fake listing detector: acnoutes its safety of rental properties.
            </p>
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-8 text-center rounded">
            Trusted by Students
          </div>
          <div className="bg-gray-100 p-8 text-center rounded">
            Trusted by Students
          </div>
          <div className="bg-gray-100 p-8 text-center rounded">
            Trusted by Students
          </div>
          <div className="bg-gray-100 p-8 text-center rounded">
            Trusted by Students
          </div>
        </div>

        <footer className="mt-12 py-6 text-center text-gray-500 border-t">
          © 2022 RentShield Reserved
        </footer>
      </main>
    </div>
  );
}

export default App;