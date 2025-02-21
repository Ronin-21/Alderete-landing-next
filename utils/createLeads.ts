import axios from "axios";

export interface Leads {
  name: string;
  email_from: string;
  phone: string;
  service: string;
  description: string;
}

const createLead = async (leadData: Leads) => {
  try {
    const response = await axios.post("/api/odoo/lead", leadData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el lead:", error);
    throw error;
  }
};

export default createLead;
