// backend/server.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
// Aquí agregarás más rutas según las vayas creando

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
