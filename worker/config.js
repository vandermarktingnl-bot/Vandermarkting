/**
 * GHL Webhook Template - Configuratiebestand
 * 
 * Dit bestand bevat de configuratie voor verschillende webhook types.
 * Pas dit aan voor jouw specifieke GHL integratie behoeften.
 */

// Vervang deze waarde met je eigen GHL API key
// In productie: gebruik environment variables (process.env.GHL_API_KEY)
const GHL_API_KEY = process.env.GHL_API_KEY || "pM3FfBDVYAzKzwL2ohNformcFEFzztwXsDKoPlVH";

// === Go High Level API Config ===

// ⚠️ Zet je API key NIET hier in plain text.
// Gebruik altijd Cloudflare Secrets:
//   npx wrangler secret put GHL_API_KEY
// en roep hem dan in je worker aan met env.GHL_API_KEY

const GHL_API_ENDPOINT = "https://api.leadconnectorhq.com/v1"; 
// of: "https://rest.gohighlevel.com/v1" (afhankelijk van je omgeving)

const webhookConfig = {
  // Contact webhook configuratie
  contact: {
    endpoint: `${GHL_API_ENDPOINT}/contacts`,
    requiredFields: ["name", "email"],
    optionalFields: ["phone", "address", "city", "state", "zip", "country", "source"],
    tag: "Website Contact",          // Tag die wordt toegevoegd aan het contact
    pipelineId: "",                  // Vul in als je direct in een pipeline wilt zetten
    stageId: "",                     // Vul in als je direct in een pipeline stage wilt zetten
    opportunityName: "Website Contact",
    customFields: {
      // Voorbeeld: "form_field_name": "GHL_custom_field_id"
    }
  },

  // Afspraak webhook configuratie
  appointment: {
    endpoint: `${GHL_API_ENDPOINT}/appointments/bookings`,
    requiredFields: ["name", "email", "date", "time", "calendar"],
    optionalFields: ["phone", "notes"],
    tag: "Website Afspraak",
    duration: 60, // duur in minuten
    customFields: {}
  },

  // Betaling webhook configuratie
  payment: {
    endpoint: `${GHL_API_ENDPOINT}/payments`,
    requiredFields: ["name", "email", "amount", "product"],
    optionalFields: ["phone", "notes"],
    tag: "Website Betaling",
    customFields: {}
  },

  // Formulier webhook configuratie
  form: {
    endpoint: `${GHL_API_ENDPOINT}/forms/submit`,
    formId: "YOUR_GHL_FORM_ID_HERE", // ⚠️ Vervang met jouw echte Form ID uit GHL
    requiredFields: ["name", "email"],
    optionalFields: ["phone", "message"],
    tag: "Website Formulier",
    customFields: {}
  },

  // Aangepaste webhook configuratie (voorbeeld)
  custom: {
    endpoint: `${GHL_API_ENDPOINT}/custom-endpoint`,
    requiredFields: [],
    optionalFields: [],
    processData: (data) => {
      // Custom logica uitvoeren
      return data;
    },
    customFields: {}
  }
};

export { GHL_API_KEY, GHL_API_ENDPOINT, webhookConfig };
