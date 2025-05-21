import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Sidebar = ({ darkMode, setDarkMode }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Overview",
    "Reports",
    "Analytics",
    "Settings",
    "Tools"
  ];

  return (
    <div className={`w-64 h-screen border-r flex flex-col justify-between p-4 text-sm ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"
    }`}>
      {/* Menu Items */}
      <div className="space-y-4">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setActiveItem(item)}
              className={`px-3 py-2 rounded cursor-pointer ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              } ${
                activeItem === item
                  ? darkMode
                    ? "bg-gray-700 font-semibold"
                    : "bg-gray-100 font-semibold text-black"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <FiSun className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
            <span>Dark Mode</span>
            <FiMoon className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-gray-400'}`} />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div>User details / admin</div>
      </div>
    </div>
  );
};

export default Sidebar;