import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const developers = [
  {
    name: "Shreya Gosavi",
    role: "AI Integration",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vaibhavi Chavan",
    role: "UI/UX Designer",
    img: "https://i.pravatar.cc/300?img=5",
  },
  {
    name: "Aditya Chavan",
    role: "Backend Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Aditya Mule",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/300?img=12",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">
          Meet the Developers
        </h1>

        <p className="text-blue-100 text-lg">
          The team behind RentShield AI
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center group"
          >

            {/* Image */}
            <img
              src={dev.img}
              alt={dev.name}
              className="w-28 h-28 mx-auto rounded-full border-4 border-blue-500 group-hover:scale-105 transition"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold mt-4 text-gray-800">
              {dev.name}
            </h2>

            {/* Role */}
            <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {dev.role}
            </span>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3">
              Passionate about building smart solutions and contributing to the RentShield AI platform.
            </p>

          </div>
        ))}

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Team;