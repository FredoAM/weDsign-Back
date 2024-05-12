const express = require('express');
const app = express();
const rutas = require('./routes/ruta');
const port = 3000; // Define el puerto del servidor

app.use('/', rutas);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor API escuchando en el puerto ${port}`);
});
