const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    },

    marca:{
        type: String,
        required: true
    },

    precio:{
        type: Number,
        required: true
    },

    stock:{
        type: Number,
        required: true
    },
    
},{versionkey:false});

module.exports = mongoose.model('producto', productoSchema);