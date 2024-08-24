const express = require('express');
const conectarBD = require('../configdb/db');
const cors = require('cors');


const app = express();
const puerto = process.env.PORT || 5000;

// Llamamos a nuestra función conectarBD:
conectarBD();
app.use(cors());
app.use(express.json());

// Rutas del proyecto:
app.use('/api/clientes', require('../routes/clientesRutas'));
app.use('/api/productos', require('../routes/productosRutas'));

// Ruta desde la web:
app.get('/',(req, res) => {
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(puerto,() => console.log("Estamos conectados desde el servidor", puerto));