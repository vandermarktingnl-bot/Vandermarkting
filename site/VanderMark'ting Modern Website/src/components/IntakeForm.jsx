import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const IntakeForm = ({ selectedPlan = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    plan: selectedPlan || '',
    goals: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Send data to GHL via Cloudflare Worker
    try {
      // Cloudflare Worker URL for GHL webhook
      const webhookUrl = 'https://vandermarkting-webhook.yourdomain.workers.dev/contact'
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'VanderMarkting Website',
          timestamp: new Date().toISOString()
        })
      })

      // For demo purposes, we'll simulate success
      setTimeout(() => {
        setIsSubmitted(true)
        setIsLoading(false)
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect p-8 rounded-xl text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">Bedankt voor je aanmelding!</h3>
        <p className="text-gray-300 mb-6">
          We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op 
          om een intake gesprek in te plannen.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary hover:text-primary/80 font-medium"
        >
          Nieuwe aanmelding
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass-effect p-8 rounded-xl space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Naam *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
            placeholder="Jouw volledige naam"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">E-mail *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
            placeholder="jouw@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Bedrijf</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
            placeholder="Jouw bedrijfsnaam"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Telefoon</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
            placeholder="+31 6 12345678"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Huidige Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
          placeholder="https://jouwwebsite.nl"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Interesse in Abonnement</label>
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
        >
          <option value="">Selecteer een plan</option>
          <option value="basic">Basic - €79/mnd</option>
          <option value="growth">Growth - €139/mnd</option>
          <option value="pro">Pro - €229/mnd</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Wat zijn jouw doelen?</label>
        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Beschrijf wat je wilt bereiken met jouw online marketing..."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Budget Range</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Selecteer budget</option>
            <option value="<500">Minder dan €500/mnd</option>
            <option value="500-1000">€500 - €1000/mnd</option>
            <option value="1000-2500">€1000 - €2500/mnd</option>
            <option value=">2500">Meer dan €2500/mnd</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Gewenste Timeline</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
          >
            <option value="">Selecteer timeline</option>
            <option value="asap">Zo snel mogelijk</option>
            <option value="1-month">Binnen 1 maand</option>
            <option value="2-3-months">2-3 maanden</option>
            <option value="flexible">Flexibel</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Aanvullende Informatie</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
          placeholder="Vertel ons meer over jouw project, specifieke wensen of vragen..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary hover:bg-primary/80 disabled:opacity-50 px-8 py-4 rounded-lg font-semibold transition-all hover-glow flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Verstuur Intake Aanvraag
            <Send size={20} />
          </>
        )}
      </motion.button>

      <p className="text-sm text-gray-400 text-center">
        Door dit formulier in te vullen ga je akkoord met onze privacy policy. 
        We nemen binnen 24 uur contact met je op.
      </p>
    </motion.form>
  )
}

export default IntakeForm
