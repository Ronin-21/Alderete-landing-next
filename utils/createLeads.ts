import axios from "axios";

const db = "alderete-informatica";
//const username = "ale_lasarte@hotmail.com";
//const apiKey = "4976ff2229eddca2ef987f151a6336e7165265d1";
const apiKey = "5ddaeb40aecf9d279bb1cd528c7a374a5decb497"; // Alderete Informática

export interface Leads {
  name: string;
  email_from: string;
  phone: string;
  service: string;
  description: string;
}

const createLead = async (leadData: Leads) => {
  try {
    const response = await axios.post("/api/odoo/lead", {
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute",
        args: [
          db, // Nombre de la base de datos de Odoo
          2, // ID del usuario de Odoo
          apiKey, // Clave de la API de Odoo
          "crm.lead", // Modelo de Odoo
          "create", // Método de Odoo
          [
            {
              name: leadData.name,
              email_from: leadData.email_from,
              phone: leadData.phone,
              x_service: leadData.service, // Personalizado para Odoo
              description: leadData.description,
            },
          ],
        ],
      },
      id: new Date().getTime(),
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear el lead:", error);
    throw error;
  }
};

export default createLead;
