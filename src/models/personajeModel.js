
const mongoose = require('mongoose');

const astronautaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  casa: { type: String, required: true },
  rol: { type: String, required: true },
  imagen: { type: String, default: '' } // Ruta de la imagen
});

const Astronauta = mongoose.model('Astronauta', astronautaSchema);

module.exports = Astronauta;