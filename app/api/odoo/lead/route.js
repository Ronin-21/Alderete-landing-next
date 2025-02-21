// app/api/odoo/lead/route.js

import axios from "axios";

export async function POST(req) {
  const db = process.env.ODOO_DB_NAME;
  const apiKey = process.env.ODOO_API_KEY;

  if (!db || !apiKey) {
    return new Response(
      JSON.stringify({ error: "Configuración del servidor incompleta" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { name, email_from, phone, service, description } = await req.json();

    // Construir la solicitud con las credenciales
    const requestData = {
      jsonrpc: "2.0",
      method: "call",
      params: {
        service: "object",
        method: "execute",
        args: [
          db, // Nombre de la base de datos
          2, // ID del usuario de Odoo (puede necesitarse otro método de autenticación)
          apiKey, // API Key para autenticación
          "crm.lead", // Modelo en Odoo
          "create", // Método de Odoo
          [
            {
              name,
              email_from,
              phone,
              x_service: service, // Campo personalizado en Odoo
              description,
            },
          ],
        ],
      },
      id: new Date().getTime(),
    };

    const response = await axios.post(
      "https://alderete-informatica.odoo.com/jsonrpc",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "Error al conectar con Odoo:",
      error.response?.data || error.message
    );
    return new Response(
      JSON.stringify({
        error: "Error al conectar con Odoo",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
