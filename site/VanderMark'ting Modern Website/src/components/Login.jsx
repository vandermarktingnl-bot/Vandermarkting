import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { signInWithGoogle } from '../firebase';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // Hier zou normaal de email/password authenticatie komen
    // Voor nu simuleren we een login
    try {
      // Simuleer een vertraging zoals bij een echte API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'test@example.com' && password === 'password') {
        setUser({
          name: 'Test Gebruiker',
          email: email,
          subscription: 'Basic',
          avatar: 'https://via.placeholder.com/40'
        });
      } else {
        setError('Ongeldige inloggegevens');
      }
    } catch (err) {
      setError('Er is een fout opgetreden bij het inloggen');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      const googleUser = await signInWithGoogle();
      setUser({
        name: googleUser.displayName,
        email: googleUser.email,
        subscription: 'Basic', // Default subscription
        avatar: googleUser.photoURL || 'https://via.placeholder.com/40'
      });
    } catch (err) {
      setError('Er is een fout opgetreden bij het inloggen met Google');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-xl shadow-xl"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Welkom terug</h2>
        <p className="text-gray-400">Log in op je VanderMark'ting account</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-lg flex items-center gap-2 text-red-200">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="jouw@email.nl"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Wachtwoord</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-primary focus:ring-primary"
            />
            <label htmlFor="remember" className="ml-2 block text-gray-400">
              Onthoud mij
            </label>
          </div>
          <a href="#" className="text-primary hover:text-primary/80">
            Wachtwoord vergeten?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/80 py-2 rounded-lg font-medium transition-colors disabled:opacity-70"
        >
          {loading ? 'Bezig met inloggen...' : (
            <>
              <LogIn size={18} />
              Inloggen
            </>
          )}
        </button>
      </form>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-400">Of ga verder met</span>
        </div>
      </div>

      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="w-full flex justify-center items-center gap-2 bg-white text-gray-800 hover:bg-gray-200 py-2 rounded-lg font-medium transition-colors disabled:opacity-70"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
          <path fill="none" d="M1 1h22v22H1z" />
        </svg>
        Inloggen met Google
      </button>

      <div className="mt-6 text-center text-sm text-gray-400">
        Nog geen account?{' '}
        <a href="#" className="text-primary hover:text-primary/80 font-medium">
          Registreer nu
        </a>
      </div>
    </motion.div>
  );
};

export default Login;