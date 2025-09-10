import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Code, Sparkles, MousePointer, Scroll, RotateCcw } from 'lucide-react'

const TechnicalEffects = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const effects = [
    {
      id: 1,
      title: "Hover Glow Effect",
      description: "Kaarten die oplichten bij hover met een zachte glow",
      category: "Hover Effects",
      icon: <MousePointer className="w-6 h-6" />,
      demo: "hover-glow"
    },
    {
      id: 2,
      title: "Tilt Cards",
      description: "3D tilt effect dat kaarten laat kantelen bij hover",
      category: "Hover Effects", 
      icon: <RotateCcw className="w-6 h-6" />,
      demo: "tilt-card"
    },
    {
      id: 3,
      title: "Letter Animation",
      description: "Tekst waarbij elke letter individueel omhoog springt",
      category: "Text Effects",
      icon: <Sparkles className="w-6 h-6" />,
      demo: "letter-animation"
    },
    {
      id: 4,
      title: "Parallax Scrolling",
      description: "Achtergrond beweegt langzamer dan voorgrond content",
      category: "Scroll Effects",
      icon: <Scroll className="w-6 h-6" />,
      demo: "parallax"
    },
    {
      id: 5,
      title: "Fade In Animation",
      description: "Elementen faden in wanneer ze in beeld komen",
      category: "Scroll Effects",
      icon: <Eye className="w-6 h-6" />,
      demo: "fade-in"
    },
    {
      id: 6,
      title: "Gradient Text",
      description: "Tekst met bewegende gradient kleuren",
      category: "Text Effects",
      icon: <Code className="w-6 h-6" />,
      demo: "gradient-text"
    },
    {
      id: 7,
      title: "Glass Morphism",
      description: "Frosted glass effect met backdrop blur",
      category: "Visual Effects",
      icon: <Sparkles className="w-6 h-6" />,
      demo: "glass-effect"
    },
    {
      id: 8,
      title: "Floating Elements",
      description: "Elementen die zacht op en neer bewegen",
      category: "Animation",
      icon: <MousePointer className="w-6 h-6" />,
      demo: "floating"
    },
    {
      id: 9,
      title: "Scale on Hover",
      description: "Elementen die groter worden bij hover",
      category: "Hover Effects",
      icon: <RotateCcw className="w-6 h-6" />,
      demo: "scale-hover"
    }
  ]

  const LetterAnimation = ({ text }) => {
    return (
      <div className="text-2xl font-bold">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="letter-animation inline-block"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    )
  }

  const DemoComponent = ({ demo, title }) => {
    switch (demo) {
      case 'hover-glow':
        return (
          <div className="w-full h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg hover-glow transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-medium">Hover over mij!</span>
          </div>
        )
      
      case 'tilt-card':
        return (
          <div className="w-full h-32 glass-effect rounded-lg tilt-card flex items-center justify-center">
            <span className="text-white font-medium">Tilt Effect</span>
          </div>
        )
      
      case 'letter-animation':
        return (
          <div className="w-full h-32 flex items-center justify-center">
            <LetterAnimation text="HOVER TEKST" />
          </div>
        )
      
      case 'parallax':
        return (
          <div className="w-full h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg relative overflow-hidden">
            <motion.div
              animate={{ x: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-medium">Parallax Demo</span>
            </div>
          </div>
        )
      
      case 'fade-in':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-medium">Fade In Effect</span>
          </motion.div>
        )
      
      case 'gradient-text':
        return (
          <div className="w-full h-32 flex items-center justify-center">
            <span className="text-3xl font-bold gradient-text">Gradient Text</span>
          </div>
        )
      
      case 'glass-effect':
        return (
          <div className="w-full h-32 glass-effect rounded-lg flex items-center justify-center">
            <span className="text-white font-medium">Glass Morphism</span>
          </div>
        )
      
      case 'floating':
        return (
          <div className="w-full h-32 flex items-center justify-center">
            <div className="floating-animation bg-primary/30 w-16 h-16 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        )
      
      case 'scale-hover':
        return (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <span className="text-white font-medium">Scale on Hover</span>
          </motion.div>
        )
      
      default:
        return (
          <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Demo Preview</span>
          </div>
        )
    }
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Technische</span>
              <br />
              <span className="text-white">Effecten Gallerij</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ontdek onze collectie van moderne web effecten en animaties. 
              Elk effect kan geïmplementeerd worden in jouw project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Effects Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {effects.map((effect, index) => (
              <motion.div
                key={effect.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(effect.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="glass-effect rounded-xl overflow-hidden hover-glow transition-all duration-300"
              >
                {/* Demo Area */}
                <div className="p-6 bg-dark-light">
                  <DemoComponent demo={effect.demo} title={effect.title} />
                </div>
                
                {/* Info Area */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{effect.icon}</div>
                    <span className="text-sm text-accent font-medium">
                      {effect.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{effect.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{effect.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Implementeer in Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Wil je deze effecten in <span className="gradient-text">jouw project</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Al deze effecten en nog veel meer kunnen geïmplementeerd worden 
              in jouw website of applicatie. Neem contact op voor een persoonlijk advies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg font-semibold transition-all hover-glow"
              >
                Start Project
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 hover:border-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-white/5"
              >
                Neem Contact Op
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TechnicalEffects
