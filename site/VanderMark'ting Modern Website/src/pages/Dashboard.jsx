import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, CreditCard, FileText, Settings, Download, Edit, Eye } from 'lucide-react'
import { updateSubscription } from '../utils/database'

const Dashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // Gebruik de echte gebruikersgegevens of een placeholder als er geen gebruiker is
  const userData = user || {
    name: 'John Doe',
    email: 'john@example.com',
    subscription: 'Growth',
    avatar: 'https://via.placeholder.com/100',
    joinDate: '2024-01-15',
    nextBilling: '2024-02-15'
  }
  
  // Functie om abonnement bij te werken
  const handleSubscriptionChange = async (subscriptionType) => {
    if (!user || !user.uid) return;
    
    setLoading(true);
    setMessage('');
    
    try {
      await updateSubscription(user.uid, subscriptionType);
      setMessage(`Abonnement succesvol bijgewerkt naar ${subscriptionType}`);
      // In een echte app zou je hier de gebruikersstaat bijwerken
    } catch (error) {
      console.error('Error bij bijwerken abonnement:', error);
      setMessage('Er is een fout opgetreden bij het bijwerken van je abonnement');
    } finally {
      setLoading(false);
    }
  }

  const mockInvoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      amount: '€139.00',
      status: 'Betaald',
      description: 'Growth Plan - Januari 2024'
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-15',
      amount: '€139.00',
      status: 'Betaald',
      description: 'Growth Plan - December 2023'
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-15',
      amount: '€79.00',
      status: 'Betaald',
      description: 'Basic Plan - November 2023'
    }
  ]

  const subscriptionPlans = [
    {
      name: 'Basic',
      price: '€79',
      current: userData.subscription === 'Basic'
    },
    {
      name: 'Growth',
      price: '€139',
      current: userData.subscription === 'Growth'
    },
    {
      name: 'Pro',
      price: '€229',
      current: userData.subscription === 'Pro'
    }
  ]

  if (!user) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Toegang Geweigerd</h2>
          <p className="text-gray-400 mb-6">Je moet ingelogd zijn om je dashboard te bekijken.</p>
          <button className="bg-primary hover:bg-primary/80 px-6 py-3 rounded-lg font-semibold">
            Inloggen
          </button>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', name: 'Overzicht', icon: <User className="w-5 h-5" /> },
    { id: 'subscription', name: 'Abonnement', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'invoices', name: 'Facturen', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', name: 'Instellingen', icon: <Settings className="w-5 h-5" /> }
  ]

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={mockUser.avatar} 
              alt={mockUser.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold">Welkom terug, {userData.name}</h1>
              <p className="text-gray-400">Beheer je account en abonnement</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-effect rounded-xl p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-effect rounded-xl p-8"
            >
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Overzicht</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Huidig Abonnement</h3>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {mockUser.subscription}
                      </div>
                      <p className="text-gray-400 text-sm">
                        Volgende facturering: {mockUser.nextBilling}
                      </p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Account Status</h3>
                      <div className="text-3xl font-bold text-green-500 mb-2">
                        Actief
                      </div>
                      <p className="text-gray-400 text-sm">
                        Lid sinds: {mockUser.joinDate}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Recente Activiteit</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-300">Factuur gegenereerd</span>
                        <span className="text-sm text-gray-400">2 dagen geleden</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-300">Website wijziging aangevraagd</span>
                        <span className="text-sm text-gray-400">1 week geleden</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-300">Abonnement geüpgraded naar Growth</span>
                        <span className="text-sm text-gray-400">2 weken geleden</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'subscription' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Abonnement Beheer</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Huidig Plan</h3>
                    <div className="bg-primary/20 border border-primary/30 p-6 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold">{mockUser.subscription} Plan</h4>
                          <p className="text-gray-300">
                            {mockUser.subscription === 'Basic' && '€79/maand'}
                            {mockUser.subscription === 'Growth' && '€139/maand'}
                            {mockUser.subscription === 'Pro' && '€229/maand'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Volgende facturering</p>
                          <p className="font-semibold">{mockUser.nextBilling}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Beschikbare Plannen</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {subscriptionPlans.map((plan) => (
                        <div
                          key={plan.name}
                          className={`p-4 rounded-lg border ${
                            plan.current
                              ? 'border-primary bg-primary/10'
                              : 'border-white/20 bg-white/5'
                          }`}
                        >
                          <h4 className="font-semibold mb-2">{plan.name}</h4>
                          <p className="text-2xl font-bold mb-4">{plan.price}<span className="text-sm text-gray-400">/mnd</span></p>
                          <button
                            className={`w-full py-2 rounded-lg font-medium ${
                              plan.current
                                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                                : 'bg-primary hover:bg-primary/80 text-white'
                            }`}
                            disabled={plan.current}
                          >
                            {plan.current ? 'Huidig Plan' : 'Upgrade'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-red-400">Abonnement Opzeggen</h3>
                    <p className="text-gray-300 mb-4">
                      Je kunt je abonnement op elk moment opzeggen. Je behoudt toegang tot je huidige plan tot het einde van de factureringsperiode.
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium">
                      Abonnement Opzeggen
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'invoices' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Factuur Geschiedenis</h2>
                  
                  <div className="space-y-4">
                    {mockInvoices.map((invoice) => (
                      <div key={invoice.id} className="bg-white/5 p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{invoice.id}</h3>
                            <p className="text-gray-400 text-sm">{invoice.description}</p>
                            <p className="text-gray-400 text-sm">{invoice.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">{invoice.amount}</p>
                            <p className={`text-sm ${
                              invoice.status === 'Betaald' ? 'text-green-500' : 'text-yellow-500'
                            }`}>
                              {invoice.status}
                            </p>
                            <button className="mt-2 flex items-center gap-2 text-primary hover:text-primary/80 text-sm">
                              <Download className="w-4 h-4" />
                              Download PDF
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Instellingen</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Persoonlijke Informatie</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Naam</label>
                          <input
                            type="text"
                            defaultValue={mockUser.name}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">E-mail</label>
                          <input
                            type="email"
                            defaultValue={mockUser.email}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>
                      <button className="mt-4 bg-primary hover:bg-primary/80 px-6 py-2 rounded-lg font-medium">
                        Opslaan
                      </button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Wachtwoord Wijzigen</h3>
                      <div className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium mb-2">Huidig Wachtwoord</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Nieuw Wachtwoord</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bevestig Nieuw Wachtwoord</label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>
                      <button className="mt-4 bg-primary hover:bg-primary/80 px-6 py-2 rounded-lg font-medium">
                        Wachtwoord Wijzigen
                      </button>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Notificatie Voorkeuren</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>E-mail notificaties voor facturen</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span>Marketing e-mails</span>
                        </label>
                        <label className="flex items-center gap-3">
                          <input type="checkbox" className="rounded" />
                          <span>SMS notificaties</span>
                        </label>
                      </div>
                      <button className="mt-4 bg-primary hover:bg-primary/80 px-6 py-2 rounded-lg font-medium">
                        Voorkeuren Opslaan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
