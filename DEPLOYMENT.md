# Deployment Instructies voor VanderMark'ting Website

## Overzicht

Deze instructies helpen je bij het pushen van de VanderMark'ting website naar Cloudflare Pages en het configureren van de Cloudflare Worker voor de GHL integratie.

## Vereisten

1. Een GitHub account
2. Een Cloudflare account
3. Een Go High Level (GHL) account met API key

## Stap 1: GitHub Repository Setup

1. Maak een nieuwe GitHub repository aan (of gebruik een bestaande)
2. Push de code naar deze repository met de volgende commando's:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/jouw-username/vandermarkting.git
git push -u origin main
```

## Stap 2: Cloudflare Account Setup

1. Maak een Cloudflare account aan op [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) als je er nog geen hebt
2. Ga naar je Cloudflare dashboard
3. Noteer je Cloudflare Account ID (te vinden in de URL van je dashboard: `https://dash.cloudflare.com/ACCOUNT_ID`)

## Stap 3: Cloudflare API Token Aanmaken

1. Ga naar je Cloudflare dashboard
2. Klik op "My Profile" (rechtsboven)
3. Ga naar "API Tokens"
4. Klik op "Create Token"
5. Kies "Edit Cloudflare Workers" template
6. Pas de permissies aan om ook "Pages" toegang te geven
7. Stel de juiste Account Resources in
8. Klik op "Continue to summary" en dan "Create Token"
9. Kopieer de token en bewaar deze veilig

## Stap 4: GitHub Secrets Configureren

1. Ga naar je GitHub repository
2. Klik op "Settings" > "Secrets and variables" > "Actions"
3. Voeg de volgende secrets toe:
   - `CF_API_TOKEN`: Je Cloudflare API token
   - `CF_ACCOUNT_ID`: Je Cloudflare account ID
   - `GHL_API_KEY`: Je Go High Level API key

## Stap 5: Eerste Deployment Triggeren

1. Maak een kleine wijziging in je repository
2. Commit en push deze wijziging naar de main branch
3. Dit zal automatisch de GitHub Action workflow triggeren
4. Ga naar de "Actions" tab in je GitHub repository om de voortgang te volgen

## Stap 6: Cloudflare Pages Configureren

1. Ga naar je Cloudflare dashboard
2. Klik op "Pages"
3. Je zou je project "vandermarkting-site" moeten zien verschijnen
4. Klik op het project om de details te bekijken
5. Ga naar "Settings" > "Custom domains" om een custom domein toe te voegen als je dat wilt

## Stap 7: Cloudflare Worker Configureren

1. Ga naar je Cloudflare dashboard
2. Klik op "Workers & Pages"
3. Je zou je worker "vandermarkting-webhook" moeten zien verschijnen
4. Klik op de worker om de details te bekijken
5. Ga naar "Settings" > "Variables" om je GHL_API_KEY als environment variable toe te voegen

## Stap 8: Worker URL Updaten in de Website

1. Zodra je worker is gedeployed, kopieer de worker URL (bijv. `https://vandermarkting-webhook.yourdomain.workers.dev`)
2. Update deze URL in het bestand `site/VanderMark'ting Modern Website/src/components/IntakeForm.jsx`
3. Commit en push deze wijziging om de website opnieuw te deployen

## Stap 9: Testen

1. Bezoek je Cloudflare Pages URL (of custom domein als je dat hebt ingesteld)
2. Test het contactformulier om te controleren of de gegevens correct worden doorgestuurd naar GHL
3. Controleer in je GHL dashboard of de contacten worden aangemaakt

## Problemen Oplossen

### Worker Deployment Faalt

- Controleer of je Cloudflare API token de juiste permissies heeft
- Controleer of je wrangler.toml correct is geconfigureerd
- Bekijk de logs in de GitHub Actions workflow

### Website Deployment Faalt

- Controleer of de site directory correct is ingesteld in de GitHub workflow
- Bekijk de build logs in Cloudflare Pages

### Formulier Werkt Niet

- Controleer of de worker URL correct is ingesteld in het formulier
- Controleer of de worker correct is geconfigureerd met de juiste GHL API key
- Bekijk de worker logs in Cloudflare dashboard

## Onderhoud

Elke keer dat je wijzigingen pusht naar de main branch van je GitHub repository, zal de website automatisch opnieuw worden gedeployed naar Cloudflare Pages.