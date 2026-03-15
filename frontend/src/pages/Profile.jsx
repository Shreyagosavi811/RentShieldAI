import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-700 mb-6">
          Dashboard
        </h2>

        <ul className="space-y-4 text-gray-600">
          <li className="hover:text-blue-600 cursor-pointer">
            Profile
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Saved Properties
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Rent Requests
          </li>

          <li className="hover:text-blue-600 cursor-pointer">
            Settings
          </li>

          <li className="text-red-500 cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6">

          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Vaibhavi Chavan
            </h1>

            <p className="text-gray-500">
              vaibhavi@email.com
            </p>

            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">
              Properties Viewed
            </p>

            <h2 className="text-2xl font-bold text-blue-600">
              24
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">
              Saved Listings
            </p>

            <h2 className="text-2xl font-bold text-green-600">
              10
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">
              Rent Requests
            </p>

            <h2 className="text-2xl font-bold text-purple-600">
              5
            </h2>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>Viewed apartment in Pune</li>
            <li>Saved house listing in Mumbai</li>
            <li>Sent rent request for Nashik flat</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Profile;