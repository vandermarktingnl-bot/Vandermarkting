import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TechnicalEffects from './pages/TechnicalEffects'
import Subscriptions from './pages/Subscriptions'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-dark text-white flex flex-col">
        <ScrollProgress />
        <Navbar user={user} setUser={setUser} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical-effects" element={<TechnicalEffects />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
