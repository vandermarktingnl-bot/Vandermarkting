import React from 'react'
import { motion } from 'framer-motion'

const Privacy = () => {
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
              <span className="text-white">Privacybeleid</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Hoe wij omgaan met jouw gegevens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect p-8 rounded-xl space-y-6"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. Inleiding</h2>
              <p className="text-gray-300">
                Bij VanderMark'ting hechten we veel waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid willen we heldere en transparante informatie geven over hoe wij omgaan met persoonsgegevens. Wij doen er alles aan om uw privacy te waarborgen en gaan daarom zorgvuldig om met persoonsgegevens.
              </p>
              <p className="text-gray-300">
                VanderMark'ting houdt zich in alle gevallen aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG).
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">2. Welke gegevens verzamelen wij</h2>
              <p className="text-gray-300">
                Wij verzamelen en verwerken de volgende persoonsgegevens:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Bedrijfsnaam</li>
                <li>Website URL</li>
                <li>Informatie over uw gebruik van onze website</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">3. Waarom verzamelen wij deze gegevens</h2>
              <p className="text-gray-300">
                Wij verwerken uw persoonsgegevens voor de volgende doelen:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Het afhandelen van uw betaling</li>
                <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
                <li>U te informeren over wijzigingen van onze diensten en producten</li>
                <li>Om goederen en diensten bij u af te leveren</li>
                <li>Voor het verzenden van onze nieuwsbrief en/of reclamefolder</li>
                <li>VanderMark'ting analyseert uw gedrag op de website om daarmee de website te verbeteren en het aanbod van producten en diensten af te stemmen op uw voorkeuren</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">4. Hoe lang bewaren wij uw gegevens</h2>
              <p className="text-gray-300">
                VanderMark'ting bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Contactgegevens: 7 jaar (wettelijke bewaartermijn voor administratie)</li>
                <li>Gegevens over websitebezoek: 26 maanden</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">5. Delen met derden</h2>
              <p className="text-gray-300">
                VanderMark'ting verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een bewerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens. VanderMark'ting blijft verantwoordelijk voor deze verwerkingen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">6. Cookies</h2>
              <p className="text-gray-300">
                VanderMark'ting gebruikt functionele, analytische en tracking cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone. VanderMark'ting gebruikt cookies met een puur technische functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt en dat bijvoorbeeld uw voorkeursinstellingen onthouden worden.
              </p>
              <p className="text-gray-300">
                U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">7. Uw rechten</h2>
              <p className="text-gray-300">
                U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door VanderMark'ting en heeft u het recht op gegevensoverdraagbaarheid.
              </p>
              <p className="text-gray-300">
                U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar vandermarkting.nl@gmail.com.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">8. Contactgegevens</h2>
              <p className="text-gray-300">
                Als u vragen heeft over dit privacybeleid, neem dan contact met ons op via:
              </p>
              <p className="text-gray-300">
                VanderMark'ting<br />
                E-mail: vandermarkting.nl@gmail.com<br />
                Telefoon: +31 634134604
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">9. Wijzigingen in dit privacybeleid</h2>
              <p className="text-gray-300">
                VanderMark'ting kan dit privacybeleid van tijd tot tijd wijzigen. Wijzigingen zullen op onze website worden gepubliceerd. Het is daarom aan te raden om deze privacyverklaring geregeld te raadplegen, zodat u van deze wijzigingen op de hoogte bent.
              </p>
              <p className="text-gray-300">
                Laatste update: {new Date().toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy