const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config'); // Asegúrate de tener el archivo config.js configurado correctamente
const connectDB = require('./config/database'); // Archivo que contiene la lógica de conexión a MongoDB
const chatRoutes = require('./routes/chatbot'); // Ruta para tu API de chatbot

// Crear la aplicación de Express
const app = express();

// Conectar a MongoDB Atlas
connectDB();

// Configuración de CORS para permitir peticiones desde tu frontend
app.use(cors({
  origin: 'http://localhost:5173', // Cambia esto según el origen de tu frontend
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Definir rutas
app.use('/api/chat', chatRoutes); // Usa las rutas del chatbot

// Puerto de escucha
const PORT = config.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
