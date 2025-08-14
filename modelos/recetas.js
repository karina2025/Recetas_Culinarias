// modelos/recetas.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const recetasSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Receta', recetasSchema);