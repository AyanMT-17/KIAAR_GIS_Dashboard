import React from "react";

const Navbar = ({ darkMode }) => {
  return (
    <nav className={`flex items-center justify-between px-8 py-4 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white'
    } shadow-lg transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 ${darkMode ? 'bg-white' : 'bg-black'} rounded-lg grid grid-cols-2 gap-1 p-1 transform hover:rotate-90 transition-transform duration-300`}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-sm`}></div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-sm`}></div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-sm`}></div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-sm`}></div>
        </div>
        <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} tracking-tight`}>
          KIAAR
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 items-center text-sm">
        <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}>
          Products
        </button>
        {['Solutions', 'Community', 'Resources', 'Pricing', 'Contact'].map((item) => (
          <a 
            key={item} 
            href="#" 
            className={`relative group ${darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}
          >
            {item}
            <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full`}></span>
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-3">
        <button className={`px-4 py-2 border-2 rounded-lg font-medium transition-all duration-200 ${
          darkMode 
            ? 'border-gray-600 text-white hover:bg-gray-700' 
            : 'border-gray-300 text-gray-800 hover:bg-gray-100'
        }`}>
          Sign in
        </button>
        <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          darkMode 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}>
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;