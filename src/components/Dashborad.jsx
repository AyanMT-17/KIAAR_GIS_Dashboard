import React from "react";

const Dashboard = ({ darkMode }) => {
  const stats = [
    { title: "Total Revenue", value: "$53,000", change: "+12.5%", changeColor: "text-green-500" },
    { title: "Active Users", value: "2,300", tag: "Premium", tagColor: "bg-purple-100 text-purple-600" },
    { title: "New Customers", value: "120", change: "+8.1%", changeColor: "text-green-500" },
    { title: "Satisfaction", value: "98%", sub: "From all projects" }
  ];

  const tabs = ["Overview", "Analytics", "Reports", "Notifications"];
  const [activeTab, setActiveTab] = React.useState("Overview");

  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'} min-h-screen`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Dashboard
        </h1>
        <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Welcome back, here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} {...stat} darkMode={darkMode} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6 border-b">
        {tabs.map((tab) => (
          <Tab 
            key={tab} 
            active={activeTab === tab} 
            onClick={() => setActiveTab(tab)}
            darkMode={darkMode}
          >
            {tab}
          </Tab>
        ))}
      </div>

      {/* Main Content Area */}
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
      } p-6 rounded-xl shadow-sm border`}>
        <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
          Performance Analytics
        </h2>
        <div className="h-80 flex items-center justify-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Chart will be implemented here
          </p>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, value, change, changeColor, tag, tagColor, sub, darkMode }) => (
  <div className={`${
    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'
  } rounded-xl shadow-sm p-4 border`}>
    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      {value}
    </h3>
    {change && <p className={`text-xs ${changeColor}`}>{change}</p>}
    {tag && (
      <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded ${tagColor}`}>
        {tag}
      </span>
    )}
    {sub && <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{sub}</p>}
  </div>
);

// Tab Component
const Tab = ({ children, active, onClick, darkMode }) => (
  <button
    onClick={onClick}
    className={`pb-2 border-b-2 ${
      active 
        ? darkMode 
          ? 'border-white text-white font-medium' 
          : 'border-black text-black font-medium'
        : `border-transparent ${darkMode ? 'text-gray-400' : 'text-gray-500'}`
    }`}
  >
    {children}
  </button>
);

export default Dashboard;