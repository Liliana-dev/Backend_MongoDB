const mongoose = require('mongoose')

//El modelo que hacemos aca es el que vamos a montar en postman

const clienteSchema = mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },

    apellidos:{
        type: String,
        required: true
    },

    documento:{
        type: Number,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    direccion:{
        type: String,
        required: true
    },
    
},{versionkey:false});

module.exports = mongoose.model('cliente', clienteSchema);