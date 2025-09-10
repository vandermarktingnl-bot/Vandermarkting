import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic",
      price: "79",
      setupCost: "197",
      description: "Perfect voor starters die hun eerste funnel willen lanceren",
      features: [
        "1 basis funnel (landing + thank you)",
        "E-mailautomation (tot 3 mails)",
        "Domeinkoppeling & basisdesign",
        "Onbeperkte wijzigingen inbegrepen"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-800"
    },
    {
      name: "Growth",
      price: "139",
      setupCost: "397",
      description: "Ideaal voor groeiende bedrijven die meer conversie willen",
      features: [
        "Alles van Basic, plus:",
        "Tot 3 funnels (landing + checkout + upsell)",
        "Volledige e-mailworkflow (tot 10 mails)",
        "Rapportage (leads & conversies)"
      ],
      popular: true,
      gradient: "from-primary to-secondary"
    },
    {
      name: "Pro",
      price: "229",
      setupCost: "697",
      description: "Complete oplossing voor serieuze ondernemers",
      features: [
        "Alles van Growth, plus:",
        "Volledige website (inclusief onbeperkt aantal funnels)",
        "Geavanceerde e-mailautomation (onbeperkt aantal mails)",
        "Copywriting inbegrepen"
      ],
      popular: false,
      gradient: "from-accent to-primary"
    }
  ]

  const benefits = [
    "Maandelijks opzegbaar",
    "Geen verborgen kosten",
    "24/7 support",
    "Onbeperkte wijzigingen",
    "Persoonlijke account manager",
    "Gratis migratie van bestaande website"
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
              <span className="text-white">Abonnementen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Kies een plan dat <span className="gradient-text">meegroeit</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Helder, schaalbaar en maandelijks opzegbaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative glass-effect rounded-2xl p-8 tilt-card hover-glow transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Meest gekozen
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-gray-400"> /mnd</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="text-sm text-gray-400">
                    €{plan.setupCost} opstartkosten
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/contact?plan=${plan.name.toLowerCase()}`}
                  className={`w-full block text-center py-4 rounded-lg font-semibold transition-all hover-glow ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/80 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Kies {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Waarom kiezen voor <span className="gradient-text">VanderMark'ting</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Alle abonnementen komen met deze voordelen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 glass-effect p-4 rounded-lg"
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Veelgestelde <span className="gradient-text">Vragen</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Kan ik mijn abonnement op elk moment opzeggen?",
                answer: "Ja, alle abonnementen zijn maandelijks opzegbaar zonder verborgen kosten of boetes."
              },
              {
                question: "Wat gebeurt er na de opstartperiode?",
                answer: "Na de opstartperiode betaal je alleen het maandelijkse abonnementstarief. Alle wijzigingen en onderhoud zijn inbegrepen."
              },
              {
                question: "Kan ik upgraden naar een hoger plan?",
                answer: "Absoluut! Je kunt op elk moment upgraden. We berekenen alleen het verschil pro rata."
              },
              {
                question: "Zijn er extra kosten voor wijzigingen?",
                answer: "Nee, alle wijzigingen zijn inbegrepen in je abonnement. Onbeperkt en zonder extra kosten."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar om te <span className="gradient-text">Starten</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Kies het plan dat bij jou past en start vandaag nog met het uitbouwen 
              van jouw online aanwezigheid
            </p>
            <Link 
              to="/contact"
              className="bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover-glow inline-flex items-center gap-2"
            >
              Plan een Intake Gesprek
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Subscriptions
