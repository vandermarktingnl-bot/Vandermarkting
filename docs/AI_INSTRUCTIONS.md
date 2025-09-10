# AI Instructies voor GHL Webhook Template

Dit document bevat instructies voor AI-assistenten om gebruikers te helpen bij het opzetten en configureren van de GHL Webhook Template.

## Doel van dit Template

Dit template is ontworpen om een snelle en eenvoudige manier te bieden om webhooks te integreren tussen websites en Go High Level (GHL), met automatische deployment naar Cloudflare. Het stelt gebruikers in staat om:

1. Formuliergegevens van hun website naar GHL te sturen
2. Verschillende soorten webhooks te configureren
3. Automatisch te deployen naar Cloudflare Pages en Workers
4. Eenvoudig aanpassingen te maken aan de website en webhooks

## Hoe de AI Moet Helpen

Als AI-assistent moet je de gebruiker door het volgende proces leiden:

### 1. Initiële Setup

Help de gebruiker bij het invullen van de benodigde configuratiebestanden:

- `worker/.env`: API keys en endpoints
- `worker/config.js`: Webhook configuraties
- `worker/wrangler.toml`: Cloudflare Worker configuratie

Vraag de gebruiker om de volgende informatie:

- GHL API Key
- Gewenste worker naam
- Welke soorten webhooks ze willen gebruiken (contactformulier, afspraak, betaling, etc.)

### 2. Aanpassen van Webhooks

Leg uit hoe de gebruiker de verschillende webhooks kan aanpassen in `worker/config.js`. Benadruk dat ze voor elke webhook het volgende moeten specificeren:

- Type (contact, appointment, payment, etc.)
- Vereiste velden
- Optionele velden
- Tags die moeten worden toegevoegd in GHL
- Eventuele custom mapping van velden

### 3. Website Integratie

Toon voorbeelden van hoe formulieren op de website kunnen worden geïntegreerd met de webhooks:

- HTML formulieren
- React componenten
- JavaScript fetch calls

### 4. Deployment

Leid de gebruiker door het deployment proces:

1. GitHub repository setup
2. GitHub Secrets toevoegen
3. Eerste deployment uitvoeren
4. Testen van de webhooks

### 5. Troubleshooting

Bied hulp bij veelvoorkomende problemen:

- Worker deployment issues
- CORS problemen
- GHL API fouten
- Formulier validatie problemen

## Specifieke Instructies per Webhook Type

### Contactformulier Webhook

Leg uit hoe een contactformulier moet worden geconfigureerd om contacten in GHL aan te maken, inclusief:

- Vereiste velden (email, naam)
- Optionele velden (telefoon, bericht, bron)
- Tags toevoegen voor automatisering in GHL

### Afspraak Webhook

Leg uit hoe een afspraakformulier moet worden geconfigureerd om afspraken in GHL te boeken, inclusief:

- Vereiste velden (email, naam, datum, tijd)
- Optionele velden (telefoon, notities)
- Kalender selectie in GHL

### Betaling Webhook

Leg uit hoe een betalingsformulier moet worden geconfigureerd om betalingen in GHL te verwerken, inclusief:

- Vereiste velden (email, naam, bedrag, product)
- Optionele velden (kortingscode, factuurgegevens)
- Integratie met betalingsproviders

## Voorbeeld Dialoog

Gebruik deze voorbeelddialoog als richtlijn voor het helpen van gebruikers:

```
Gebruiker: Ik wil dit template gebruiken voor mijn bedrijf. Wat heb ik nodig?

AI: Om dit template te gebruiken heb je het volgende nodig:
1. Een Go High Level account met API toegang
2. Een Cloudflare account
3. Een GitHub account

Laten we beginnen met het configureren van je GHL API key. Heb je deze al?

Gebruiker: Ja, mijn GHL API key is XXX

AI: Perfect! Laten we die toevoegen aan je .env bestand. Ik zal je ook helpen met het configureren van de webhooks die je nodig hebt. Welke soorten formulieren wil je op je website hebben?

Gebruiker: Ik wil een contactformulier en een afspraakformulier

AI: Uitstekend! Ik zal je helpen met het configureren van beide webhooks...
```

## Belangrijke Aandachtspunten

1. **Veiligheid**: Benadruk altijd het belang van het veilig opslaan van API keys in environment variables en GitHub Secrets.

2. **Testen**: Moedig gebruikers aan om hun webhooks grondig te testen voordat ze live gaan.

3. **Schaalbaarheid**: Leg uit hoe Cloudflare Workers schaalbaar zijn en hoe dit voordelig is voor hun website.

4. **Aanpassingen**: Toon hoe gebruikers het template kunnen aanpassen aan hun specifieke behoeften.

5. **Onderhoud**: Leg uit hoe gebruikers hun configuratie kunnen updaten wanneer nodig.

Door deze richtlijnen te volgen, kun je als AI-assistent gebruikers effectief helpen bij het implementeren van dit template voor hun specifieke use case.