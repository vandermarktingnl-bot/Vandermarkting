import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import IntakeForm from '../components/IntakeForm'

const Contact = () => {
  const [searchParams] = useSearchParams()
  const selectedPlan = searchParams.get('plan')

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      details: "vandermarkting.nl@gmail.com",
      action: "mailto:vandermarkting.nl@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefoon",
      details: "+31 634134604",
      action: "tel:+31634134604"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locatie",
      details: "Amsterdam, Nederland",
      action: null
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: "+31 634134604",
      action: "https://wa.me/31634134604"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Openingstijden",
      details: "Ma-Vr: 9:00 - 18:00",
      action: null
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Contact</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {selectedPlan 
                ? `Interesse in het ${selectedPlan} plan? Laten we praten!`
                : "Klaar om jouw online aanwezigheid naar het volgende niveau te tillen?"
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center hover-glow transition-all duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.action ? (
                  <a 
                    href={info.action}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-300">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {selectedPlan ? (
                <>Interesse in <span className="gradient-text">{selectedPlan}</span>?</>
              ) : (
                <>Start jouw <span className="gradient-text">Project</span></>
              )}
            </h2>
            <p className="text-xl text-gray-300">
              Vul het formulier in en we nemen binnen 24 uur contact met je op
            </p>
          </motion.div>
          
          <IntakeForm selectedPlan={selectedPlan} />
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Amsterdam, Nederland</h3>
                <p className="text-gray-300">
                  We werken remote en komen graag bij je langs voor een persoonlijk gesprek
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
