# GHL Webhook Template

Een kant-en-klaar template voor het snel opzetten van webhooks tussen je website en Go High Level (GHL), met automatische deployment naar Cloudflare Pages en Workers.

## Wat dit template doet

- **Formulieren → GHL**: Stuur formuliergegevens direct naar je GHL account
- **Meerdere webhook types**: Ondersteuning voor contacten, afspraken, betalingen en meer
- **Serverless**: Draait op Cloudflare Workers zonder eigen server
- **Automatische deployment**: Via GitHub Actions
- **Veilig**: API keys worden veilig opgeslagen
- **Aanpasbaar**: Eenvoudig uit te breiden voor specifieke use cases

## Mapstructuur

```
/worker/              # Cloudflare Worker voor GHL integratie
  worker.js           # De worker code
  config.js           # Webhook configuraties
  wrangler.toml       # Cloudflare configuratie
  package.json        # Dependencies
  .env.example        # Voorbeeld voor environment variables

/site/                # Voorbeeldwebsite met formulieren
  index.html          # Voorbeeld landingspagina
  contact.html        # Voorbeeld contactformulier
  appointment.html    # Voorbeeld afspraakformulier
  payment.html        # Voorbeeld betalingsformulier

/docs/                # Documentatie
  AI_INSTRUCTIONS.md  # Instructies voor AI-assistenten

/.github/workflows/   # GitHub Actions workflows
  deploy.yml          # Automatische deployment
```

## Snelstart (met AI-assistent)

1. **Clone dit template**
   ```bash
   git clone https://github.com/jouw-username/ghl-webhook-template.git
   cd ghl-webhook-template
   ```

2. **Vraag de AI om hulp**
   Gebruik een AI-assistent (zoals ChatGPT) en vraag: "Help me dit GHL Webhook Template configureren voor mijn bedrijf". De AI zal je door het proces leiden op basis van de instructies in `/docs/AI_INSTRUCTIONS.md`.

## Handmatige setup

### 1. Configuratie

1. **Maak een `.env` bestand in de `/worker` directory**
   ```
   GHL_API_KEY=jouw_ghl_api_key
   ```

2. **Pas `config.js` aan voor jouw webhooks**
   Bewerk het bestand om de gewenste webhooks te configureren.

3. **Pas `wrangler.toml` aan**
   Verander de worker naam naar jouw voorkeur.

### 2. Worker deployment

```bash
cd worker
npm install
npx wrangler login
npx wrangler deploy
```

### 3. Website aanpassen

1. Pas de voorbeeldformulieren in de `/site` directory aan
2. Zorg dat de formulieren naar jouw worker URL verwijzen

### 4. GitHub en automatische deployment

1. Push je code naar GitHub
2. Voeg de volgende GitHub Secrets toe:
   - `CF_API_TOKEN`: Je Cloudflare API token
   - `CF_ACCOUNT_ID`: Je Cloudflare account ID
   - `GHL_API_KEY`: Je Go High Level API key

## Webhook types

### Contact webhook

Gebruik deze webhook om contacten aan te maken in GHL:

```html
<form action="https://jouw-worker.workers.dev/contact" method="POST">
  <input name="name" placeholder="Naam" required>
  <input name="email" type="email" placeholder="E-mail" required>
  <input name="phone" type="tel" placeholder="Telefoon">
  <button type="submit">Verstuur</button>
</form>
```

### Afspraak webhook

Gebruik deze webhook om afspraken te boeken in GHL:

```html
<form action="https://jouw-worker.workers.dev/appointment" method="POST">
  <input name="name" placeholder="Naam" required>
  <input name="email" type="email" placeholder="E-mail" required>
  <input name="phone" type="tel" placeholder="Telefoon">
  <input name="date" type="date" required>
  <input name="time" type="time" required>
  <select name="calendar" required>
    <option value="calendar_id_1">Kalender 1</option>
    <option value="calendar_id_2">Kalender 2</option>
  </select>
  <button type="submit">Afspraak maken</button>
</form>
```

### Betaling webhook

Gebruik deze webhook om betalingen te verwerken in GHL:

```html
<form action="https://jouw-worker.workers.dev/payment" method="POST">
  <input name="name" placeholder="Naam" required>
  <input name="email" type="email" placeholder="E-mail" required>
  <input name="amount" type="number" step="0.01" required>
  <input name="product" placeholder="Product" required>
  <button type="submit">Betalen</button>
</form>
```

## JavaScript integratie

Je kunt ook JavaScript gebruiken om gegevens naar de webhook te sturen:

```javascript
fetch('https://jouw-worker.workers.dev/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Naam',
    email: 'email@voorbeeld.nl',
    phone: '0612345678'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Troubleshooting

- **CORS problemen**: Controleer de CORS instellingen in `worker.js`
- **API fouten**: Controleer of je GHL API key correct is en de juiste rechten heeft
- **Deployment fouten**: Controleer de GitHub Actions logs

## Aanpassingen

Dit template is ontworpen om eenvoudig aangepast te worden aan jouw specifieke behoeften. De belangrijkste bestanden om aan te passen zijn:

- `worker/config.js`: Webhook configuraties
- `worker/worker.js`: Worker logica
- `site/*.html`: Voorbeeldformulieren

## Ondersteuning

Als je hulp nodig hebt, kun je:

1. De AI-assistent raadplegen met het bestand `/docs/AI_INSTRUCTIONS.md`
2. Een issue aanmaken op GitHub
3. De documentatie van [Cloudflare Workers](https://developers.cloudflare.com/workers/) en [Go High Level API](https://highlevel.stoplight.io/) raadplegen