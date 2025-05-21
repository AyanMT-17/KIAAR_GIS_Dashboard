import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashborad"
import Auth from "./components/Auth"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Auth darkMode={darkMode} onLogin={handleLogin} />;
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Navbar darkMode={darkMode} />
        <div className="flex">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="flex-1">
            <Dashboard darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App