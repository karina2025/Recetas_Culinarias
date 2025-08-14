// index.js
const express = require('express');
const dotenv = require('dotenv');
const conectarDB = require('./db/conexion');

dotenv.config();
conectarDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar las rutas (las crearemos en el siguiente paso)
const usuariosRuta = require('./rutas/usuariosruta');
const recetasRuta = require('./rutas/recetasruta');
const ingredientesRuta = require('./rutas/ingredientesruta');

// Usar las rutas en la aplicación
app.use('/api/usuarios', usuariosRuta);
app.use('/api/recetas', recetasRuta);
app.use('/api/ingredientes', ingredientesRuta);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});