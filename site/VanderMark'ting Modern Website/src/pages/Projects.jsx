import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Tag, ArrowRight } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      category: "E-commerce",
      client: "TechStore Nederland",
      year: "2024",
      description: "Complete redesign van e-commerce platform met focus op conversie optimalisatie en gebruikerservaring.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "E-commerce", "UX/UI", "Conversion"],
      results: [
        "45% toename in conversie",
        "60% snellere laadtijden",
        "30% meer organisch verkeer"
      ],
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Landing Page Optimalisatie",
      category: "SaaS",
      client: "CloudSync Solutions",
      year: "2024",
      description: "Ontwikkeling van high-converting landing pages voor SaaS product met A/B testing en analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Landing Page", "A/B Testing", "Analytics", "SaaS"],
      results: [
        "120% meer leads",
        "35% hogere conversie",
        "50% lagere CAC"
      ],
      link: "#"
    },
    {
      id: 3,
      title: "Restaurant Keten Website",
      category: "Restaurant",
      client: "Bella Vista Restaurants",
      year: "2023",
      description: "Multi-locatie website met online reserveringssysteem en menu management voor restaurant keten.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tags: ["Multi-site", "Reservations", "CMS", "Mobile"],
      results: [
        "200% meer online reserveringen",
        "80% minder telefonische reserveringen",
        "25% toename in omzet"
      ],
      link: "#"
    },
    {
      id: 4,
      title: "Fitness App Landing Page",
      category: "Health & Fitness",
      client: "FitTrack Pro",
      year: "2023",
      description: "Moderne landing page voor fitness app met focus op app downloads en gebruikersregistratie.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Mobile App", "Health", "Downloads", "Registration"],
      results: [
        "300% meer app downloads",
        "65% hogere registratie rate",
        "40% betere user retention"
      ],
      link: "#"
    },
    {
      id: 5,
      title: "B2B Lead Generation Funnel",
      category: "B2B",
      client: "InnovateTech B.V.",
      year: "2023",
      description: "Complete lead generation funnel voor B2B software bedrijf met geautomatiseerde email sequences.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      tags: ["B2B", "Lead Generation", "Email Automation", "CRM"],
      results: [
        "180% meer qualified leads",
        "90% automatisering van lead nurturing",
        "55% kortere sales cycle"
      ],
      link: "#"
    },
    {
      id: 6,
      title: "Online Cursus Platform",
      category: "Education",
      client: "LearnPro Academy",
      year: "2024",
      description: "E-learning platform met cursus management, student tracking en certificering systeem.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["E-learning", "LMS", "Certificates", "Progress Tracking"],
      results: [
        "500+ actieve studenten",
        "95% cursus completion rate",
        "4.8/5 gemiddelde beoordeling"
      ],
      link: "#"
    }
  ]

  const categories = ['all', 'E-commerce', 'SaaS', 'Restaurant', 'Health & Fitness', 'B2B', 'Education']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
              <span className="text-white">Eerdere</span>
              <br />
              <span className="gradient-text">Projecten</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ontdek hoe we andere bedrijven hebben geholpen hun online doelen te bereiken
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category === 'all' ? 'Alle Projecten' : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover-glow transition-all duration-300 tilt-card"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/80 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-dark/80 px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{project.client}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Resultaten:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-xs text-gray-300 flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Bekijk Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Onze <span className="gradient-text">Impact</span> in Cijfers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projecten Voltooid" },
              { number: "98%", label: "Klant Tevredenheid" },
              { number: "150%", label: "Gem. Conversie Verbetering" },
              { number: "24/7", label: "Support & Onderhoud" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-effect p-6 rounded-xl"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Klaar voor jouw <span className="gradient-text">Succesverhaal</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Laat ons jouw volgende project worden. We helpen je graag 
              om jouw online doelen te bereiken.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/80 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover-glow inline-flex items-center gap-2"
            >
              Start jouw Project
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
