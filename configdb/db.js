const mongoose = require('mongoose')
require('dotenv').config();

//funcion conexión base de datos:
const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('estamos conectados desde mongo DB'))
    .catch((err) => console.error(err));
}


module.exports = conectarBD;
