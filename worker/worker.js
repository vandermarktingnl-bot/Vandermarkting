/**
 * GHL Webhook Template - Worker.js
 * 
 * Deze Cloudflare Worker handelt webhooks af tussen je website en Go High Level (GHL).
 * De worker ontvangt formuliergegevens, verwerkt deze en stuurt ze door naar GHL.
 */

// Importeer de configuratie
const { GHL_API_KEY, GHL_API_ENDPOINT, webhookConfig } = require('./config.js');

// CORS headers voor cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Pas dit aan naar je eigen domein in productie
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Verwerk een inkomend verzoek
 */
async function handleRequest(request) {
  // CORS preflight verzoek afhandelen
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  // Alleen POST verzoeken toestaan
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Alleen POST verzoeken worden ondersteund' }, 405);
  }

  // URL path gebruiken om het webhook type te bepalen
  const url = new URL(request.url);
  const webhookType = url.pathname.split('/').pop();

  // Controleren of het webhook type wordt ondersteund
  if (!webhookConfig[webhookType]) {
    return jsonResponse({ error: `Onbekend webhook type: ${webhookType}` }, 400);
  }

  // Configuratie voor dit webhook type
  const config = webhookConfig[webhookType];

  try {
    // Request body verwerken
    let data;
    const contentType = request.headers.get('Content-Type') || '';
    
    if (contentType.includes('application/json')) {
      // JSON data verwerken
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      // Form data verwerken
      const formData = await request.formData();
      data = {};
      for (const entry of formData.entries()) {
        data[entry[0]] = entry[1];
      }
    } else {
      return jsonResponse({ error: 'Content-Type moet application/json of application/x-www-form-urlencoded zijn' }, 415);
    }

    // Controleren of alle verplichte velden aanwezig zijn
    for (const field of config.requiredFields) {
      if (!data[field]) {
        return jsonResponse({ error: `Verplicht veld ontbreekt: ${field}` }, 400);
      }
    }

    // Aangepaste verwerking uitvoeren indien gedefinieerd
    if (config.processData && typeof config.processData === 'function') {
      data = config.processData(data);
    }

    // Gegevens naar GHL sturen
    const ghlResponse = await sendToGHL(data, config);

    // Antwoord teruggeven
    return jsonResponse({
      success: true,
      message: `Gegevens succesvol verzonden naar GHL via ${webhookType} webhook`,
      ghlResponse
    });

  } catch (error) {
    console.error('Error:', error);
    return jsonResponse({ error: `Er is een fout opgetreden: ${error.message}` }, 500);
  }
}

/**
 * Stuur gegevens naar GHL API
 */
async function sendToGHL(data, config) {
  // Basis contactgegevens
  const contactData = {
    name: data.name,
    email: data.email,
    phone: data.phone || '',
  };

  // Voeg optionele velden toe indien aanwezig
  config.optionalFields.forEach(field => {
    if (data[field]) {
      contactData[field] = data[field];
    }
  });

  // Voeg custom fields toe indien gedefinieerd
  if (config.customFields && Object.keys(config.customFields).length > 0) {
    contactData.customField = {};
    for (const [formField, ghlField] of Object.entries(config.customFields)) {
      if (data[formField]) {
        contactData.customField[ghlField] = data[formField];
      }
    }
  }

  // Voeg tag toe indien gedefinieerd
  if (config.tag) {
    contactData.tags = [config.tag];
  }

  // Specifieke logica per webhook type
  let endpoint = config.endpoint;
  let payload = contactData;

  // Specifieke aanpassingen per webhook type
  switch (Object.keys(webhookConfig).find(key => webhookConfig[key] === config)) {
    case 'appointment':
      // Afspraak specifieke velden
      payload = {
        contact: contactData,
        calendarId: data.calendar,
        startTime: `${data.date}T${data.time}:00`,
        duration: config.duration || 60,
        notes: data.notes || ''
      };
      break;
    
    case 'payment':
      // Betaling specifieke velden
      payload = {
        contact: contactData,
        amount: parseFloat(data.amount),
        productName: data.product,
        notes: data.notes || ''
      };
      break;
    
    case 'form':
      // Formulier specifieke velden
      endpoint = `${GHL_API_ENDPOINT}/forms/${config.formId}/submit`;
      break;
  }

  // Stuur verzoek naar GHL API
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GHL_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  // Verwerk het antwoord
  const responseData = await response.json();
  
  if (!response.ok) {
    throw new Error(`GHL API fout: ${responseData.message || response.statusText}`);
  }
  
  return responseData;
}

/**
 * Helper functie voor het maken van JSON responses
 */
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json'
    }
  });
}

// Event listener voor inkomende verzoeken
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});