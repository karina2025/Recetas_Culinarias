// modelos/usuarios.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuariosSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuariosSchema);