import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { getUser, createOrUpdateUser } from './utils/database'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TechnicalEffects from './pages/TechnicalEffects'
import Subscriptions from './pages/Subscriptions'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Luister naar authenticatie status veranderingen
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Haal gebruikersgegevens op uit de database
          const dbUser = await getUser(currentUser.uid);
          
          // Basisgegevens van de gebruiker
          const userData = {
            uid: currentUser.uid,
            name: currentUser.displayName || 'Gebruiker',
            email: currentUser.email,
            avatar: currentUser.photoURL || 'https://via.placeholder.com/40',
            subscription: dbUser?.subscription || 'Basic'
          };
          
          // Update de gebruiker in de database
          await createOrUpdateUser(currentUser.uid, userData);
          
          // Update de lokale gebruikersstaat
          setUser(userData);
        } catch (error) {
          console.error('Error bij laden gebruikersgegevens:', error);
          // Fallback naar basis gebruikersgegevens bij een fout
          setUser({
            uid: currentUser.uid,
            name: currentUser.displayName || 'Gebruiker',
            email: currentUser.email,
            avatar: currentUser.photoURL || 'https://via.placeholder.com/40',
            subscription: 'Basic'
          });
        }
      } else {
        // Gebruiker is uitgelogd
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup functie
    return () => unsubscribe();
  }, []);

  // Toon een laadscherm terwijl we de authenticatie status controleren
  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

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
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
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
