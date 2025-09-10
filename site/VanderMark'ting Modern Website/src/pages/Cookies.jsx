import React from 'react'
import { motion } from 'framer-motion'

const Cookies = () => {
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
              <span className="text-white">Cookiebeleid</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Hoe wij cookies gebruiken op onze website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect p-8 rounded-xl space-y-6"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. Wat zijn cookies</h2>
              <p className="text-gray-300">
                Cookies zijn kleine tekstbestanden die tijdens het bezoek aan onze website op uw computer, tablet of smartphone worden geplaatst. In deze tekstbestanden wordt informatie opgeslagen die bij een later bezoek weer kan worden herkend door de website.
              </p>
              <p className="text-gray-300">
                Onze website maakt gebruik van cookies om u de best mogelijke gebruikerservaring te bieden. Zonder cookies zou de website minder goed functioneren. Bepaalde functies zouden zelfs helemaal niet werken.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">2. Welke cookies gebruiken wij</h2>
              <p className="text-gray-300">
                VanderMark'ting gebruikt de volgende soorten cookies:
              </p>
              
              <h3 className="text-xl font-semibold">Functionele cookies</h3>
              <p className="text-gray-300">
                Dit zijn cookies die noodzakelijk zijn om de website naar behoren te laten functioneren. Deze cookies zorgen ervoor dat bepaalde voorkeuren worden onthouden, zoals taalinstellingen of inloggegevens. Zonder deze cookies kunnen bepaalde diensten niet worden geleverd.
              </p>
              
              <h3 className="text-xl font-semibold">Analytische cookies</h3>
              <p className="text-gray-300">
                Wij gebruiken analytische cookies, zoals Google Analytics, om inzicht te krijgen in het gebruik van onze website. Deze cookies verzamelen informatie over het bezoekgedrag, zoals het aantal bezoekers, welke pagina's het meest worden bezocht en de tijd die bezoekers doorbrengen op onze website. We gebruiken deze informatie om de website te verbeteren en de gebruikerservaring te optimaliseren.
              </p>
              
              <h3 className="text-xl font-semibold">Marketing cookies</h3>
              <p className="text-gray-300">
                Deze cookies worden gebruikt om bezoekers op websites te volgen. De bedoeling is om advertenties te tonen die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller voor uitgevers en externe adverteerders. Deze cookies houden uw surfgedrag bij zodat we op maat gemaakte content en advertenties kunnen aanbieden.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">3. Cookies blokkeren en verwijderen</h2>
              <p className="text-gray-300">
                U kunt cookies blokkeren of verwijderen via uw browserinstellingen. Hieronder vindt u links naar instructies voor de meest gebruikte browsers:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/nl-nl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Safari</a></li>
              </ul>
              <p className="text-gray-300">
                Houd er rekening mee dat als u cookies uitschakelt, de website mogelijk niet optimaal functioneert.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">4. Specifieke cookies die we gebruiken</h2>
              
              <h3 className="text-xl font-semibold">Google Analytics</h3>
              <p className="text-gray-300">
                We gebruiken Google Analytics om bij te houden hoe bezoekers onze website gebruiken. We hebben een verwerkersovereenkomst met Google gesloten. Daarin staan strikte afspraken over wat zij mogen bijhouden. Wij hebben Google niet toegestaan de verkregen Analytics informatie te gebruiken voor andere Google diensten. Wij laten Google de IP-adressen anonimiseren.
              </p>
              
              <h3 className="text-xl font-semibold">Social Media</h3>
              <p className="text-gray-300">
                Op onze website zijn knoppen opgenomen om pagina's te kunnen promoten of delen op sociale netwerken zoals Facebook, Instagram en Twitter. Deze knoppen worden gerealiseerd door code die wordt aangeleverd door de sociale netwerken zelf. Deze code plaatst onder meer een cookie.
              </p>
              <p className="text-gray-300">
                Leest u de privacyverklaringen van de respectievelijke sociale netwerken om te zien wat zij met uw persoonsgegevens doen die zij met deze code verwerken.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">5. Wijzigingen in het cookiebeleid</h2>
              <p className="text-gray-300">
                VanderMark'ting behoudt zich het recht voor om wijzigingen aan te brengen in dit cookiebeleid. Elke aanpassing zal op deze pagina worden gepubliceerd. We raden u aan dit cookiebeleid regelmatig te raadplegen, zodat u altijd van de inhoud van het geldende cookiebeleid op de hoogte bent.
              </p>
              <p className="text-gray-300">
                Laatste update: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">6. Contact</h2>
              <p className="text-gray-300">
                Heeft u na het lezen van ons cookiebeleid nog vragen of opmerkingen, neem dan contact met ons op:
              </p>
              <p className="text-gray-300">
                VanderMark'ting<br />
                E-mail: vandermarkting.nl@gmail.com<br />
                Telefoon: +31 634134604
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Cookies