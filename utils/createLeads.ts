import axios from "axios";

const db = process.env.ODOO_DB_NAME;
const apiKey = process.env.ODOO_API_KEY;

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
