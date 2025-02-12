// app/api/odoo/lead/route.js

import axios from "axios";

export async function POST(req) {
  const body = await req.json(); // Obtiene el cuerpo de la solicitud POST

  try {
    const response = await axios.post(
      "https://alderete-informatica.odoo.com/jsonrpc",
      body,
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
    console.error("Error al conectar con Odoo:", error);
    return new Response(
      JSON.stringify({ error: "Error al conectar con Odoo" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
