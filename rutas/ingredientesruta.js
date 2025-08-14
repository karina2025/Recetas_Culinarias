// modelos/ingredientes.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ingredientesSchema = new Schema({
  nombre: { type: String, required: true },
  receta: { type: Schema.Types.ObjectId, ref: 'Receta', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Ingrediente', ingredientesSchema);