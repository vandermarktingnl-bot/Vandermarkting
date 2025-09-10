import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Target, Rocket, CheckCircle } from 'lucide-react'
import IntakeForm from '../components/IntakeForm'

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Snelle Implementatie",
      description: "Van concept tot live website in recordtijd"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gerichte Strategie",
      description: "Datagedreven marketing die resultaten levert"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Schaalbare Oplossingen",
      description: "Groei mee met jouw bedrijf zonder zorgen"
    }
  ]

  const stats = [
    { number: "500+", label: "Tevreden Klanten" },
    { number: "98%", label: "Conversie Verbetering" },
    { number: "24/7", label: "Support" },
    { number: "∞", label: "Wijzigingen" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">VanderMark'ting</span>
              <br />
              <span className="text-white">Volledige Marketing</span>
              <br />
              <span className="text-white">Oplossingen</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Van funnel tot volledige website - wij bieden de complete oplossing 
              voor jouw online marketing succes
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#intake-form"
                className="bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover-glow flex items-center gap-2"
              >
                Start Intake Gesprek
                <ArrowRight size={20} />
              </a>
              
              <Link 
                to="/technical-effects"
                className="border border-white/20 hover:border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-white/5"
              >
                Bekijk Technische Effecten
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-animation">
          <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl" />
        </div>
        <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Waarom <span className="gradient-text">VanderMark'ting</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wij bieden niet alleen marketing tools, maar een complete oplossing 
              die jouw bedrijf naar het volgende niveau tilt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-8 rounded-xl hover-glow transition-all duration-300 tilt-card"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Jouw <span className="gradient-text">Intake Gesprek</span>
            </h2>
            <p className="text-xl text-gray-300">
              Vertel ons over jouw project en ontdek hoe wij jou kunnen helpen
            </p>
          </motion.div>
          
          <IntakeForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te <span className="gradient-text">Groeien</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Sluit je aan bij honderden tevreden klanten die hun online aanwezigheid 
              hebben getransformeerd met onze oplossingen
            </p>
            <Link 
              to="/subscriptions"
              className="bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover-glow inline-flex items-center gap-2"
            >
              Bekijk Abonnementen
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
