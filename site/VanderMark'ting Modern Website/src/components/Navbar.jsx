import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, User, LogOut } from 'lucide-react'

const Navbar = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Technische Effecten', path: '/technical-effects' },
    { name: 'Abonnementen', path: '/subscriptions' },
    { name: 'Projecten', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const handleGoogleLogin = () => {
    // Simulate Google login
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      subscription: 'Growth',
      avatar: 'https://via.placeholder.com/40'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"
            />
            <span className="text-xl font-bold gradient-text">VanderMark'ting</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-2 hover:text-primary">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm">{user.name}</span>
                </Link>
                <button onClick={handleLogout} className="text-gray-400 hover:text-white">
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Inloggen
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            {!user && (
              <button
                onClick={() => {
                  handleGoogleLogin()
                  setIsOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-sm font-medium text-primary"
              >
                Inloggen
              </button>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
