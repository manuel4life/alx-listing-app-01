import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">LuxStay</div>
        <nav className="flex items-center space-x-4">
          <button className="text-gray-700">Rooms</button>
          <button className="text-gray-700">Mansions</button>
          <button className="text-gray-700">Countryside</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
