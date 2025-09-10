/**
 * GHL Webhook Template - Configuratiebestand
 * 
 * Dit bestand bevat de configuratie voor verschillende webhook types.
 * Pas dit aan voor jouw specifieke GHL integratie behoeften.
 */

// Vervang deze waarde met je eigen GHL API key
// In productie: gebruik environment variables (process.env.GHL_API_KEY)
const GHL_API_KEY = process.env.GHL_API_KEY || "YOUR_GHL_API_KEY_HERE";

// GHL API endpoint
const GHL_API_ENDPOINT = "https://rest.gohighlevel.com/v1";

// Webhook configuraties
const webhookConfig = {
  // Contact webhook configuratie
  contact: {
    endpoint: `${GHL_API_ENDPOINT}/contacts`,
    requiredFields: ["name", "email"],
    optionalFields: ["phone", "address", "city", "state", "zip", "country", "source"],
    // Tag die wordt toegevoegd aan het contact in GHL
    tag: "Website Contact",
    // Pipeline ID waar het contact aan wordt toegevoegd (optioneel)
    pipelineId: "",
    // Stage ID binnen de pipeline (optioneel)
    stageId: "",
    // Opportunity naam (optioneel)
    opportunityName: "Website Contact",
    // Custom fields mapping (optioneel)
    customFields: {
      // Voorbeeld: "formulier_veld_naam": "GHL_custom_field_id"
    }
  },
  
  // Afspraak webhook configuratie
  appointment: {
    endpoint: `${GHL_API_ENDPOINT}/appointments/bookings`,
    requiredFields: ["name", "email", "date", "time", "calendar"],
    optionalFields: ["phone", "notes"],
    // Tag die wordt toegevoegd aan het contact in GHL
    tag: "Website Afspraak",
    // Duur van de afspraak in minuten
    duration: 60,
    // Custom fields mapping (optioneel)
    customFields: {}
  },
  
  // Betaling webhook configuratie
  payment: {
    endpoint: `${GHL_API_ENDPOINT}/payments`,
    requiredFields: ["name", "email", "amount", "product"],
    optionalFields: ["phone", "notes"],
    // Tag die wordt toegevoegd aan het contact in GHL
    tag: "Website Betaling",
    // Custom fields mapping (optioneel)
    customFields: {}
  },
  
  // Formulier webhook configuratie (algemeen)
  form: {
    endpoint: `${GHL_API_ENDPOINT}/forms/submit`,
    // Vervang met jouw GHL formulier ID
    formId: "YOUR_GHL_FORM_ID_HERE",
    requiredFields: ["name", "email"],
    optionalFields: ["phone", "message"],
    // Tag die wordt toegevoegd aan het contact in GHL
    tag: "Website Formulier",
    // Custom fields mapping (optioneel)
    customFields: {}
  },
  
  // Aangepaste webhook configuratie (voorbeeld)
  custom: {
    endpoint: `${GHL_API_ENDPOINT}/custom-endpoint`,
    requiredFields: [],
    optionalFields: [],
    // Aangepaste verwerking functie (optioneel)
    processData: (data) => {
      // Voer hier aangepaste logica uit
      return data;
    },
    // Custom fields mapping (optioneel)
    customFields: {}
  }
};

module.exports = {
  GHL_API_KEY,
  GHL_API_ENDPOINT,
  webhookConfig
};