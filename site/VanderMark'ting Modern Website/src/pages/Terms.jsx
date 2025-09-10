import React from 'react'
import { motion } from 'framer-motion'

const Terms = () => {
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
              <span className="text-white">Algemene Voorwaarden</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              De voorwaarden voor onze dienstverlening
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect p-8 rounded-xl space-y-6"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">1. Definities</h2>
              <p className="text-gray-300">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>VanderMark'ting:</strong> de eenmanszaak VanderMark'ting, gevestigd te Amsterdam, ingeschreven bij de Kamer van Koophandel.</li>
                <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die aan VanderMark'ting opdracht heeft gegeven tot het verrichten van werkzaamheden.</li>
                <li><strong>Werkzaamheden:</strong> alle werkzaamheden waartoe opdracht is gegeven, of die door VanderMark'ting uit anderen hoofde worden verricht.</li>
                <li><strong>Bescheiden:</strong> alle door opdrachtgever aan VanderMark'ting ter beschikking gestelde goederen, waaronder stukken of gegevensdragers, alsmede alle in het kader van de uitvoering van de opdracht door VanderMark'ting vervaardigde goederen, waaronder stukken of gegevensdragers.</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">2. Toepasselijkheid</h2>
              <p className="text-gray-300">
                Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten welke door VanderMark'ting binnen het kader van de uitvoering van de werkzaamheden worden aangegaan. Afwijkingen van deze algemene voorwaarden zijn slechts geldig, indien en voor zover zij schriftelijk tussen opdrachtgever en VanderMark'ting zijn overeengekomen.
              </p>
              <p className="text-gray-300">
                Eventuele algemene voorwaarden van opdrachtgever zijn niet geldig. De toepasselijkheid daarvan wordt door VanderMark'ting uitdrukkelijk van de hand gewezen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">3. Aanvang en duur van de overeenkomst</h2>
              <p className="text-gray-300">
                De overeenkomst komt eerst tot stand en vangt aan op het moment dat de door opdrachtgever ondertekende opdrachtbevestiging door VanderMark'ting retour is ontvangen en ondertekend. De bevestiging is gebaseerd op de ten tijde daarvan door opdrachtgever aan VanderMark'ting verstrekte informatie. De bevestiging wordt geacht de overeenkomst juist en volledig weer te geven.
              </p>
              <p className="text-gray-300">
                Het staat partijen vrij de totstandkoming van de overeenkomst met andere middelen te bewijzen.
              </p>
              <p className="text-gray-300">
                De overeenkomst wordt aangegaan voor onbepaalde tijd tenzij uit de aard of strekking van de verleende opdracht voortvloeit dat deze voor een bepaalde tijd is aangegaan.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">4. Gegevens opdrachtgever</h2>
              <p className="text-gray-300">
                Opdrachtgever is gehouden alle gegevens en bescheiden, welke VanderMark'ting overeenkomstig zijn oordeel nodig heeft voor het correct uitvoeren van de verleende opdracht, tijdig in de gewenste vorm en op de gewenste wijze ter beschikking van VanderMark'ting te stellen.
              </p>
              <p className="text-gray-300">
                VanderMark'ting heeft het recht de uitvoering van de opdracht op te schorten tot het moment dat opdrachtgever aan de in het vorige lid genoemde verplichting heeft voldaan.
              </p>
              <p className="text-gray-300">
                Indien en voor zover opdrachtgever zulks verzoekt, worden de ter beschikking gestelde bescheiden, behoudens het bepaalde onder artikel 15, aan deze geretourneerd.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">5. Uitvoering opdracht</h2>
              <p className="text-gray-300">
                VanderMark'ting bepaalt de wijze waarop de verleende opdracht wordt uitgevoerd. VanderMark'ting zal zo mogelijk rekening houden met tijdig verstrekte en verantwoorde aanwijzingen van opdrachtgever omtrent de uitvoering van de opdracht.
              </p>
              <p className="text-gray-300">
                VanderMark'ting heeft het recht bepaalde werkzaamheden, zonder kennisgeving aan opdrachtgever, te laten verrichten door een door VanderMark'ting aan te wijzen persoon of derde, indien zulks naar oordeel van VanderMark'ting wenselijk is met het oog op een voor partijen optimale uitvoering van de opdracht.
              </p>
              <p className="text-gray-300">
                VanderMark'ting voert de opdracht uit in overeenstemming met de toepasselijke gedrags- en beroepsregels.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">6. Intellectuele eigendom</h2>
              <p className="text-gray-300">
                VanderMark'ting behoudt zich alle rechten voor met betrekking tot producten van de geest welke hij gebruikt of heeft gebruikt in het kader van de uitvoering van de overeenkomst met opdrachtgever, voor zover op die producten in juridische zin rechten kunnen bestaan of worden gevestigd.
              </p>
              <p className="text-gray-300">
                Het is opdrachtgever uitdrukkelijk verboden die producten, waaronder begrepen maar niet beperkt tot computerprogramma's, systeemontwerpen, werkwijzen, adviezen, (model)contracten en andere geestesproducten, een en ander in de ruimste zin des woords, al dan niet met inschakeling van derden, aan derden te verstrekken, te verveelvoudigen, openbaar te maken of te exploiteren anders dan tot het inwinnen van een deskundig oordeel omtrent de werkzaamheden van VanderMark'ting.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">7. Honorarium</h2>
              <p className="text-gray-300">
                Het honorarium van VanderMark'ting is niet afhankelijk van de uitkomst van de verleende opdracht en wordt berekend met inachtneming van de gebruikelijke tarieven van VanderMark'ting en is verschuldigd naar mate door VanderMark'ting werkzaamheden ten behoeve van opdrachtgever zijn verricht.
              </p>
              <p className="text-gray-300">
                Het honorarium van VanderMark'ting, zo nodig vermeerderd met verschotten en declaraties van ingeschakelde derden, wordt inclusief de eventueel verschuldigde omzetbelasting, per maand, per kwartaal, per jaar of na volbrenging van de werkzaamheden aan opdrachtgever in rekening gebracht.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">8. Betaling</h2>
              <p className="text-gray-300">
                Betaling van het factuurbedrag door opdrachtgever dient te geschieden binnen 14 dagen na de factuurdatum, in Nederlandse valuta, door middel van storting ten gunste van een door VanderMark'ting aan te wijzen bankrekening en voor zover de betaling betrekking heeft op werkzaamheden, zonder enig recht op korting of schuldvergelijking.
              </p>
              <p className="text-gray-300">
                Indien opdrachtgever niet binnen de hiervoor genoemde termijn, dan wel niet binnen de nader overeengekomen termijn heeft betaald, is hij van rechtswege in verzuim en heeft VanderMark'ting, zonder nadere sommatie of ingebrekestelling, het recht vanaf de vervaldag opdrachtgever de wettelijke rente in rekening te brengen tot op de datum van algehele voldoening, een en ander onverminderd de verdere rechten welke VanderMark'ting heeft.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">9. Aansprakelijkheid</h2>
              <p className="text-gray-300">
                Voor alle directe schade van opdrachtgever, op enigerlei wijze verband houdend met, dan wel veroorzaakt door niet-, niet tijdige of niet behoorlijke uitvoering van de opdracht, is VanderMark'ting slechts aansprakelijk tot een maximum van het bedrag van het honorarium voor de betreffende opdracht over het laatste kalenderjaar, tenzij er aan de zijde van VanderMark'ting sprake is van opzet of daarmee gelijk te stellen grove nalatigheid.
              </p>
              <p className="text-gray-300">
                VanderMark'ting is niet aansprakelijk voor schade, welke is veroorzaakt doordat opdrachtgever hem onjuiste of onvolledige informatie heeft verstrekt.
              </p>
              <p className="text-gray-300">
                Voor alle indirecte schade, waaronder mede begrepen stagnatie in de geregelde gang van zaken in de onderneming van opdrachtgever, op enigerlei wijze verband houdend met, dan wel veroorzaakt door een fout in de uitvoering van de werkzaamheden door VanderMark'ting, is deze nimmer aansprakelijk.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">10. Opzegging</h2>
              <p className="text-gray-300">
                Opdrachtgever en VanderMark'ting kunnen te allen tijde de overeenkomst opzeggen. Indien de overeenkomst eindigt voordat de opdracht is voltooid, is het bepaalde onder artikel 7, tweede lid van toepassing.
              </p>
              <p className="text-gray-300">
                Opzegging dient schriftelijk aan de wederpartij te worden medegedeeld.
              </p>
              <p className="text-gray-300">
                Indien en voor zover VanderMark'ting de overeenkomst door opzegging beëindigt, is hij gehouden opdrachtgever gemotiveerd mede te delen welke redenen ten grondslag liggen aan de opzegging en al datgene te doen wat de omstandigheden in het belang van de wederpartij eisen.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">11. Toepasselijk recht en forumkeuze</h2>
              <p className="text-gray-300">
                Op alle overeenkomsten tussen opdrachtgever en VanderMark'ting waarop deze algemene voorwaarden van toepassing zijn, is Nederlands recht van toepassing.
              </p>
              <p className="text-gray-300">
                Alle geschillen die verband houden met overeenkomsten tussen opdrachtgever en VanderMark'ting, waarop deze voorwaarden van toepassing zijn en welke niet tot de competentie van de kantonrechter behoren, worden beslecht door de bevoegde rechter in het arrondissement waarin VanderMark'ting zijn woonplaats heeft, tenzij het geschillen betreft die geen betrekking hebben op het bedrijf of beroep van opdrachtgever.
              </p>
              <p className="text-gray-300">
                Het staat opdrachtgever vrij om de procesgang van tuchtrechtspraak te volgen of het geschil voor te leggen aan een daartoe ingestelde arbitragecommissie.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">12. Wijzigingen</h2>
              <p className="text-gray-300">
                VanderMark'ting is gerechtigd deze algemene voorwaarden te wijzigen. De gewijzigde voorwaarden worden geacht te zijn aanvaard indien de opdrachtgever niet binnen 14 dagen nadat de gewijzigde voorwaarden hem zijn toegezonden of kenbaar geworden tegen de gewijzigde voorwaarden bezwaar heeft gemaakt.
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

export default Terms