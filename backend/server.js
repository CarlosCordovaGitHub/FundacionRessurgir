// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware para permitir solicitudes JSON y CORS
app.use(express.json());
app.use(cors());

// Endpoint para manejar las preguntas del chatbot
app.post('/chat/question', (req, res) => {
  const { question } = req.body; // Obtiene la pregunta desde el cuerpo de la solicitud

  console.log(`Pregunta recibida: ${question}`); // Muestra la pregunta en la consola para debug

  // Respuesta de prueba
  res.json({
    answer: "Esta es una respuesta de prueba del servidor.",
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
