const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const invitacionesRouter = require('./routes/invitaciones');
const usuariosRouter = require('./routes/usuarios'); 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/invitaciones', invitacionesRouter);
app.use('/login', usuariosRouter); 

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
