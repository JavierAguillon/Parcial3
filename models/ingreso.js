const mongoose = require('mongoose')

const {Schema } = mongoose;

registroSchema = new Schema({
    nombre: {type: String, required: true},
    tipo: {type: String, required: true},
    tamaño: {type: Number, required: true},
    ubicacion: {type: String, required: true}
});

module.exports = mongoose.model('Registro', RegistroSchema);