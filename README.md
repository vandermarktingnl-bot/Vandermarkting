# VanderMark'ting Website & GHL Webhook

Een volledig geïntegreerde oplossing voor VanderMark'ting, met een moderne website en Go High Level (GHL) integratie, gehost op Cloudflare Pages en Workers.

## Functionaliteiten

- **Moderne Website**: Gebouwd met React en Vite
- **Inlogscherm**: Gebruikersauthenticatie via Firebase
- **Database**: Gebruikersgegevens worden opgeslagen in Firebase Firestore
- **GHL Integratie**: Formulieren sturen gegevens direct naar GHL
- **Cloudflare Hosting**: Website en worker worden gehost op Cloudflare

## Mapstructuur

```
/worker/              # Cloudflare Worker voor GHL integratie
  worker.js           # De worker code
  config.js           # Webhook configuraties
  wrangler.toml       # Cloudflare configuratie
  package.json        # Dependencies
  .env.example        # Voorbeeld voor environment variables

/site/                # Website met React en Firebase
  VanderMark'ting Modern Website/  # De website code
    src/              # Broncode van de website
    public/           # Statische bestanden
    package.json      # Dependencies
    .env.example      # Voorbeeld voor environment variables

/.github/workflows/   # GitHub Actions workflows
  deploy.yml          # Automatische deployment
```

## Online Toegang

De website is online beschikbaar via Cloudflare Pages:

- **Website**: https://vandermarkting.pages.dev
- **API Endpoint**: https://vandermarkting-webhook.workers.dev

## Deployment

Zie [DEPLOYMENT.md](./DEPLOYMENT.md) voor gedetailleerde instructies over het deployen van de website en worker.

### Snelle Deployment

Om de website en worker te deployen:

1. Push je wijzigingen naar de main branch
2. De GitHub Actions workflow zal automatisch de website en worker deployen naar Cloudflare
3. De Cloudflare API key is al geconfigureerd in de workflow

## Firebase Configuratie

Voor het inlogscherm en de database functionaliteit moet je een Firebase project configureren:

1. Maak een Firebase project aan op [firebase.google.com](https://firebase.google.com)
2. Schakel Authentication in met Google als provider
3. Maak een Firestore database aan
4. Voeg je Firebase configuratie toe aan de GitHub repository secrets

## Lokale Ontwikkeling

### Website

```bash
cd site/VanderMark\'ting\ Modern\ Website
npm install
npm run dev
```

### Worker

```bash
cd worker
npm install
npm run dev
```