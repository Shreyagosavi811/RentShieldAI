import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">RentShield AI</div>
      <div>{/* empty right side – keeps design minimal */}</div>
    </nav>
  );
};

export default Navbar;